import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { EndPoints } from './end-points';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login';
import { RegisterUser } from '../models/register-user';
import { ForgotPassword } from '../models/forgot-password';
import { AuthenticateResponse } from '../models/authenticate-response';
import { ResetPassword } from '../models/reset-password';
import { UserResetPassword } from '../models/user-reset-password';
import { ResolveStart, Router } from '@angular/router';
import { Role } from 'app/models/role';
import { UserFilter } from 'app/models/dto/user-filter';
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { TranslateService } from '@ngx-translate/core';
import { CultureInfo } from 'assets/i18n/culture-info';
import * as _ from 'lodash';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class UserService {
  private currentUserSubject: BehaviorSubject<AuthenticateResponse>;
  public currentUser: Observable<AuthenticateResponse>;

  private currentRetroIdSubject: BehaviorSubject<string>;
  public currentRetroId: Observable<string>;

  public currentLangSubject: BehaviorSubject<string>;
  public currentLang: Observable<string>;


  public langJsonDataSubject: BehaviorSubject<any>;
  public langJsonData: Observable<any>;



  constructor(private http: HttpClient,private translateService: TranslateService, private baseService: BaseService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<AuthenticateResponse>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.currentRetroIdSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentRetroId')));
    this.currentRetroId = this.currentRetroIdSubject.asObservable();

    this.currentLangSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentLang') || '{}'));
    this.currentLang = this.currentLangSubject.asObservable();


    this.langJsonDataSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('langData') || '{}'));
    this.langJsonData = this.langJsonDataSubject.asObservable();


  }

  public get currentUserValue(): AuthenticateResponse {
    return this.currentUserSubject.value;
  }

  public get currentRetroIdValue(): string {
    if (this.currentRetroIdSubject.value) {
      return this.currentRetroIdSubject.value;
    }
    else {
      this.currentRetroIdSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentRetroId')));
      return this.currentRetroIdSubject.value;
    }
  }

   //LANG DATA
   public langJsonSetValue(value: any) {

    localStorage.setItem('langData', JSON.stringify(value))
    this.langJsonDataSubject.next(value);
  }


  public get langJsonValue(): any {

    if (!this.langJsonDataSubject.value) {
      this.langJsonDataSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('langData') || '{}'));
    }

    return this.langJsonDataSubject.value;


  }
  
  //USER LANG

  public langConvert(prop: string) {

    let data = _.get(this.langJsonValue, prop);;
    return data;
  }


  public get currentLangValue(): string {
    if (!this.translateService.currentLang) {
      if (!this.currentLangSubject.value) {
        this.currentLangSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentLang') || '{}'));
      }

      return this.currentLangSubject.value;
    }
    else {
      return this.translateService.currentLang;
    }

  }



  
  public currentLangSetValue(value: any) {
    let cultureCode = this.cultureCode(value);
    localStorage.setItem('currentLang', JSON.stringify(value))
    localStorage.setItem('currentCultureLang', JSON.stringify(cultureCode))
    this.currentLangSubject.next(value);

  }


  cultureCode(value: string) {

    let lang = CultureInfo.find(p => p.twoLetterLangCode == value);
    if (lang)
      return lang.cultureInfoCode;
    else
      return "";
  }

  // tslint:disable-next-line:typedef
  public currentUserSetValue(value) {
    this.currentUserSubject.next(value);
    localStorage.setItem('currentUser', JSON.stringify(value));

  }

  public currentRetroIdSetValue(value) {
    this.currentRetroIdSubject.next(value);
    localStorage.setItem('currentRetroId', JSON.stringify(value));

  }

  public isAuthorized() {
    const currentUser = this.currentUserValue;

    if (currentUser) {
      // logged in so return true
      return true;
    }

  }

  public hasRole(role) {
    if (this.currentUserValue != null) {
      let roles = this.currentUserValue.roles;
      if (roles != null) {
        return this.isAuthorized() && roles.filter(p => p == role).length > 0;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  // tslint:disable-next-line: typedef
  login(login: Login) {

    return this.baseService.post<AuthenticateResponse>(
      login,
      environment.serverBaseUrl,
      EndPoints.USERS + '/login'
    );
  }




  // tslint:disable-next-line: typedef
  register(user: User) {
    return this.baseService.post<any>(
      user,
      environment.serverBaseUrl,
      EndPoints.USERS + '/register'
    );
  }

  // tslint:disable-next-line: typedef
  forgotpassword(reset: ForgotPassword) {
    return this.baseService.post<User>(
      reset,
      environment.serverBaseUrl,
      EndPoints.USERS + '/ForgotPassword'
    );
  }


  // tslint:disable-next-line: typedef
  resetpassword(reset: ResetPassword) {
    return this.baseService.post<any>(
      reset,
      environment.serverBaseUrl,
      EndPoints.USERS + '/ForgotPasswordReset'
    );
  }




  // tslint:disable-next-line: typedef
  create(user: User) {

    return this.baseService.post<User>(
      user,
      environment.serverBaseUrl,
      EndPoints.USERS + '/register'
    );
  }


  // tslint:disable-next-line: typedef
  update(user: User) {
    return this.baseService.update<User>(
      user,
      environment.serverBaseUrl,
      EndPoints.USERS + '/updateUser'
    );
  }

  // tslint:disable-next-line: typedef
  delete(id: number) {
    return this.baseService.get(
      id,
      environment.serverBaseUrl,
      EndPoints.USERS + '/deleteUser'
    );
  }

  // tslint:disable-next-line:typedef
  getUserById(id: string) {
    return this.baseService.get<User>(
      id,
      environment.serverBaseUrl,
      EndPoints.USERS + '/GetUserById'
    );
  }

  // tslint:disable-next-line:typedef
  getUserByRetro(id: string) {
    return this.baseService.get<User>(
      id,
      environment.serverBaseUrl,
      EndPoints.USERS + '/GetUserByRetro'
    );
  }

  // tslint:disable-next-line:typedef
  sendUserInfo(id: string) {
    return this.baseService.get<any>(
      id,
      environment.serverBaseUrl,
      EndPoints.USERS + '/SendUserInfo'
    );
  }


  // tslint:disable-next-line:typedef
  getAllUser(userFilter: UserFilter) {
    return this.baseService.post<User[]>(userFilter,
      environment.serverBaseUrl,
      EndPoints.USERS + '/GetAllUser'
    );
  }


  profileUpdate(user: User) {
    return this.baseService.post<User>(
      user,
      environment.serverBaseUrl,
      EndPoints.USERS + "/UpdateProfile"
    );

  }

  resetPassword(resetUser: UserResetPassword) {
    return this.baseService.post<any>(
      resetUser,
      environment.serverBaseUrl,
      EndPoints.USERS + "/ResetPassword"
    );
  }

  // tslint:disable-next-line:typedef
  getAllUsers() {
    return this.baseService.list<User>(
      '',
      environment.serverBaseUrl,
      EndPoints.USERS
    );
  }

  // tslint:disable-next-line:typedef
  logout() {
    let currentUser = this.currentUserValue;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('currentRetroId');

    this.currentUserSubject.next(null);

    if (currentUser) {

      var leadsRef = firebase.default.database().ref('onlineuser/');
      leadsRef.on('value', function (snapshot) {
        var data = snapshotToArray(snapshot);
        var filterUser = data.filter(p => p.userId == currentUser.userId);
        if (filterUser.length > 0) {
          filterUser.forEach(p => {
            firebase.default.database().ref('onlineuser/' + p.key).remove();

          })
        }
      });
    }


  }
}

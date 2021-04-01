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

@Injectable(
  {
    providedIn: 'root',
  }
)
export class UserService {
  private currentUserSubject: BehaviorSubject<AuthenticateResponse>;
  public currentUser: Observable<AuthenticateResponse>;

  constructor(private http: HttpClient, private baseService: BaseService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<AuthenticateResponse>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue(): AuthenticateResponse {
    return this.currentUserSubject.value;
  }

  // tslint:disable-next-line:typedef
  public currentUserSetValue(value) {
    this.currentUserSubject.next(value);
    localStorage.setItem('currentUser', JSON.stringify(value));

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
    console.log("logout")
    let currentUser = this.currentUserValue;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');

    this.currentUserSubject.next(null);
     
    if (currentUser){
      
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

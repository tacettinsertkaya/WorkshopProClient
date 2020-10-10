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

@Injectable(
  {
    providedIn: 'root',
  }
)
export class UserService {
  private currentUserSubject: BehaviorSubject<AuthenticateResponse>;
  public currentUser: Observable<AuthenticateResponse>;

  constructor(private http: HttpClient, private baseService: BaseService) {
    this.currentUserSubject = new BehaviorSubject<AuthenticateResponse>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue(): AuthenticateResponse {
    return this.currentUserSubject.value;
  }

  // tslint:disable-next-line:typedef
  public currentUserSetValue(value) {
    this.currentUserSubject.next(value);
  }
  // tslint:disable-next-line: typedef
  login(login: Login) {
    console.log('User service', login);
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
    console.log('User service', user);
    return this.baseService.post<User>(
      user,
      environment.serverBaseUrl,
      EndPoints.USERS
    );
  }


  // tslint:disable-next-line: typedef
  update(user: User) {
    return this.baseService.update<User>(
      user,
      environment.serverBaseUrl,
      EndPoints.USERS
    );
  }

  // tslint:disable-next-line: typedef
  delete(id: number) {
    return this.baseService.delete(
      id,
      environment.serverBaseUrl,
      EndPoints.USERS
    );
  }

  // tslint:disable-next-line:typedef
  getUserById(id: string) {
    return this.baseService.get<User>(
      id,
      environment.serverBaseUrl,
      EndPoints.USERS+'/GetUserById'
    );
  }

  profileUpdate(user: User) {
    return this.baseService.post<User>(
      user,
      environment.serverBaseUrl,
      EndPoints.USERS+"/UpdateProfile"
    );

  }

resetPassword(resetUser: UserResetPassword) {
    return this.baseService.post<any>(
      resetUser,
      environment.serverBaseUrl,
      EndPoints.USERS+"/ResetPassword"
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
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

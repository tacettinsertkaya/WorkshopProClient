

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticateResponse } from '../models/authenticate-response';
import { UserService } from '../services/user.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    public currentUserSubject: BehaviorSubject<AuthenticateResponse>;
    public currentUser: Observable<AuthenticateResponse>;
    isUser:boolean=false;

    constructor(
        private router: Router,
        private userService: UserService
    ) {
        
    this.currentUserSubject = new BehaviorSubject<AuthenticateResponse>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

     }

     
  public get currentUserValue(): AuthenticateResponse {
    return this.currentUserSubject.value;
  }

  existUser() {
    this.isUser=this.userService.hasRole("Member");
 }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.userService.currentUserValue;
       
        if (currentUser) {
            // logged in so return true
            
            return true;
        }

       
            
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  //we use behaviorSubject to subscribe on properties "to know if user is logged in or out"
  constructor(private _HttpClient: HttpClient , private _Router:Router) {
    //  if(localStorage.getItem('userToken') != null){
    //   this.isUserLoggedIn.next(true)
    //  }
  }

  registerForm(userData: Object): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userData
    );
  }

  loginForm(userData: Object): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      userData
    );
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.isUserLoggedIn.next(false);
    this._Router.navigate(['/login'])
  }
}

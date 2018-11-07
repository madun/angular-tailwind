import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

  private _registerUrl = "https://devel.sharinghappiness.org/api/v1/user/register"
  private _loginrUrl = "https://devel.sharinghappiness.org/api/v1/user/login"
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginrUrl, user)
  }

  loggedIn(){ // is logged in?
    return !!localStorage.getItem('token'); // !! true or false
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/masuk'])
  }
}

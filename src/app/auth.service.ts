import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _registerUrl = "https://devel.sharinghappiness.org/api/v1/user/register"
  private _loginrUrl = "https://devel.sharinghappiness.org/api/v1/user/login"
  private _userDetailUrl = "https://devel.sharinghappiness.org/api/v1/user/profile"
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginrUrl, user)
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/masuk'])
  }

  getToken(){
    let token = {
      "token" : localStorage.getItem('token'),
      "token_email" : localStorage.getItem('token_email')
    }
    return token
  }

  getUserDetail(token){
    return this.http.get<any>(this._userDetailUrl+'?token_email='+token.token_email+'&token='+token.token)
  }

  loggedIn(){ // is logged in?
    return !!localStorage.getItem('token')
  }
}

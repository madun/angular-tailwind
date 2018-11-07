import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class AuthService {

  private _registerUrl = "https://devel.sharinghappiness.org/api/v1/user/register"
  private _loginrUrl = "https://devel.sharinghappiness.org/api/v1/user/login"
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginrUrl, user)
  }
}

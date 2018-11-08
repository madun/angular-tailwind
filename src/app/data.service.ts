import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {

  constructor(private http: HttpClient,
              private _auth: AuthService) { }

  getCampaign(){
    return this.http.get('https://devel.sharinghappiness.org/api/v1/program')
  }

  getCampaignDetail(slug){
    return this.http.get('https://devel.sharinghappiness.org/api/v1/program/'+slug)
  }

  getUserProfile(){
    let token = this._auth.getToken();
    return this.http.get('https://devel.sharinghappiness.org/api/v1/user/profile?token_email='+token.token_email+'&token='+token.token)
  }

}

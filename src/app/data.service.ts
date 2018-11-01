import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getCampaign(){
    return this.http.get('https://devel.sharinghappiness.org/api/v1/program')
  }

}

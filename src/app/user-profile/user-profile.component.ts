import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface resultProfile {
  result: Object
}

@Component({
  selector: 'app-user-profile',
  providers: [DataService],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profile$: Object;
  constructor(private data: DataService,
              private _route: Router) { }

  ngOnInit() {
    this.data.getUserProfile<resultProfile>().subscribe(data => {
      
      if(data.status == 20){ //this secureity for if user inject token with browser
        this.profile$ = data.result
      } else {
        this._route.navigateByUrl('/masuk')
      }
    })
  }

}

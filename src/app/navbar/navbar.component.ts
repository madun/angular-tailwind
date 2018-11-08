import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  providers: [DataService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  profile$: Object;
  constructor(private _authService: AuthService,
              private data: DataService) { }

  ngOnInit() {
    this.data.getUserProfile<resultProfile>().subscribe(data => {
      this.profile$ = data.result
    })
  }

  public hideMenu:boolean = false;

  toggleHide(i){
    this.hideMenu = false;
  }

  toggleShow(i){
    this.hideMenu = true;
  }

}

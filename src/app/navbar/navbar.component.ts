import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public hideMenu:boolean = false;

  toggleHide(i){
    this.hideMenu = false;
  }

  toggleShow(i){
    this.hideMenu = true;
  }

}

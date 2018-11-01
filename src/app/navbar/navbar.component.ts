import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  // title = 'app';
  public hideMenu:boolean = true;

  toggleMenu(){
    this.hideMenu = !this.hideMenu
  }

}

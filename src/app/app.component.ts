import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'app';
  public hideMenu:boolean = true;

  toggleMenu(){
    this.hideMenu = !this.hideMenu
  }
}

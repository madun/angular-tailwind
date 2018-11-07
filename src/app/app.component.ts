import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//   showLoading:boolean = true;
  constructor(private router: Router) {

    router.events.subscribe( (event: Event) => {

        if (event instanceof NavigationStart) {
            // Show loading indicator
            // this.showLoading = true;
            // console.log('start');
        }

        if (event instanceof NavigationEnd) {
            // Hide loading indicator
            // this.showLoading = false;
            // console.log('end');
        }

        if (event instanceof NavigationError) {
            // Hide loading indicator

            // Present error to user
            // console.log(event.error);
        }
    });
  }
}

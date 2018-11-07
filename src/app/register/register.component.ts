import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  isLoading:Boolean = false;
  btn = document.getElementById("btn-register");
  constructor(
        private _auth: AuthService,
        private router: Router
            ) { }

  ngOnInit() {
    console.log(!!localStorage.getItem('token'));
  }

  registerUser() {
    this.isLoading = true;
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        if(res.status==20){
          alert(res.message);
          this.isLoading = false;
          this.router.navigateByUrl('/masuk');
        }else if(res.status==30){
          console.log(res);
          this.isLoading = false;
        }
      },
      err => console.log(err)
    )
  }

}

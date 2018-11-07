import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginUserData = {}
  isLoading:Boolean = false;
  btn = document.getElementById("btn-register");
  constructor(
        private _auth: AuthService,
        private router: Router
            ) { }

  ngOnInit() {
  }

  loginUser() {
    this.isLoading = true;
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        if(res.status==20){
          alert(res.message);
          this.isLoading = false;
          localStorage.setItem('token', res.result.token);
          this.router.navigateByUrl('/user-profile');
        }else if(res.status==30){
          this.isLoading = false;
        }
      },
      err => console.log(err)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  isLoading:Boolean = false;
  loginUserData = {}
  emailRegex: any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  // passRegex:any ='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$'; 
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  constructor(
        private _auth: AuthService,
        private router: Router
            ) { }

  ngOnInit() {
  }

  loginUser() {
    this.loginUserData = this.form.value;
    this.isLoading = true;
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        if(res.status==20){
          this.isLoading = false;
          localStorage.setItem('token', res.result.token);
          localStorage.setItem('token_email', this.loginUserData.email);
          this.router.navigateByUrl('/user-profile');
        }else if(res.status==30){
          console.log(res);
          this.isLoading = false;
        }
      },
      err => console.log(err)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  isLoading:Boolean = false;
  emailRegex: any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    phone_number: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  constructor(
        private _auth: AuthService,
        private router: Router
            ) { }

  ngOnInit() {
    let token = this._auth.getToken()
    this._auth.getUserDetail(token).subscribe( res => {
      if(res.status==20){
        this.router.navigate(['/user-profile']);
      }
    })
  }

  registerUser() {
    this.registerUserData = this.form.value
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

import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { user } from '../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorStatus: string = "";

  loginUser: user ={
    email: "",
    password: ""
  }

  constructor(private loginService: LoginService, private route: Router) { }

  onLogin(loginForm: NgForm) {
    console.log(loginForm);
    
    this.loginUser = loginForm.value;

    this.loginService.login(this.loginUser).subscribe(
      data => {
        this.loginService.loggedIn(true, data.accessToken);
        this.route.navigate(['/home']);
      },
      error => {
        this.errorStatus = error.error;
      }
    );
  }
}

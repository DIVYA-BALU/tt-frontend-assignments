import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { user } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorStatus: string = "";

  userId: string | null= localStorage.getItem("userId");

  loginUser: user ={
    email: "",
    password: ""
  }

  constructor(private loginService: LoginService, private route: Router) { }

  onLogin(loginForm: NgForm) {
    this.loginUser = loginForm.value;

    this.loginService.login(this.loginUser).subscribe(
      data => {
        this.loginService.loggedIn(true, data.accessToken);
        this.route.navigate(['/home']);
      },
      error => {
        this.errorStatus = error.error;
        // console.log(error.ok)
      }
    );
  }

  reloadPage(){
    window.location.reload()
  }
}

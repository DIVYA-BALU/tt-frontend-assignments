import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorStatus: boolean = false;

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
        this.route.navigate(['/home']).then(() => this.reloadPage());
        console.log(data.accessToken);
      },
      error => {
        if (error.ok === false) {
          this.errorStatus = true;
        }
        console.log(error.ok)
      }
    );
  }

  reloadPage(){
    window.location.reload()
  }
}

interface user{
  email: string;
  password: string;
}

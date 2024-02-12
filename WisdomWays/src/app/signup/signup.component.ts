import { Component } from '@angular/core';
import { SignupService } from './signup.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupUser: signupDTO = {
    userId: "",
    email: "",
    password: ""
  }

  errorStatus: string = "";

  constructor(private signupService: SignupService, private loginService: LoginService, private route: Router) { }

  onSignup(signupForm: NgForm) {

    this.signupUser = signupForm.value;

    this.signupService.signup(this.signupUser).subscribe(
      data => {
        this.loginService.loggedIn(true, data.accessToken);
        this.route.navigate(['/home']).then(() => this.reloadPage());
        // localStorage.setItem("userId", this.signupUser.userId);
        console.log(data.accessToken);
      },
      error => {
          this.errorStatus = error.error;
        console.log(error.error)
      }
    )
  }

  reloadPage(){
    window.location.reload()
  }
}

interface signupDTO {
  userId: string;
  email: string;
  password: string;
}

import { Component } from '@angular/core';
import { SignupService } from './signup.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { signupDTO } from '../models/signUpDTO ';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupUser: signupDTO = {
    name: "",
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
        this.route.navigate(['/home']);
      },
      error => {
          this.errorStatus = error.error;
      }
    )
  }
}

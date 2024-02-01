import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  token: any = '';
  constructor(private login: LoginService) {}
  loginRequest = {
    username: '',
    password: '',
  };

  loginUser() {
    console.log(this.loginRequest);

    this.login
      .loginUser(this.loginRequest.username, this.loginRequest.password)
      .subscribe((token) => {
        this.token = token;
        console.log(token);
      },(error) => {
        console.log("error",error,error.error.text);
      });
  }

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = "";
  password = "";

  constructor(private loginService: LoginService, private route: Router) { }

  postData() {
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        this.loginService.loggedIn(true, data.accessToken);
        this.route.navigate(['/home']);
        console.log(data.accessToken);
      },
      error => console.log(error)
    );
  }
}

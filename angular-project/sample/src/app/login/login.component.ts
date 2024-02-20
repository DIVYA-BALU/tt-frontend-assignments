import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  invalidLogin: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(): void {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        this.loginService.loggedin(true, response.token);
        this.router.navigate(['/dashboard']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.invalidLogin = true;
        } else {
          console.log(error);
        }
      }
    );
  }
}

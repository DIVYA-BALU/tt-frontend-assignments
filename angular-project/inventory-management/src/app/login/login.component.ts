import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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


  onSubmit(): void{
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        this.loginService.loggedin(true,response.token);
        console.log(response.token);
        this.router.navigate(['/home']);
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

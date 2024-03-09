import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  invalidLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(): void {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log(response);
        this.loginService.loggedin(true, response.token);
        this.loginService.getUser();
        this.router.navigate(['header/home'])
      }
    )
  }
}

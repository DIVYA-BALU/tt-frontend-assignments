import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}


  onSubmit(): void{
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        this.loginService.loggedin(true,response.token);
        console.log(response.token);
      }
    );
  }

}

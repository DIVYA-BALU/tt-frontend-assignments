import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string="";
  password: string="";
  
  constructor(private loginService: LoginService) { }
  onSubmit(): void {
   this.loginService.login(this.email, this.password).subscribe(
      data => {
        console.log('JWT Token:', data.token);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}

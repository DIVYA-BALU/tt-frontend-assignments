import { Component } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent {
  token: any = '';
  constructor(private signUpService: SignupService, private router: Router) {}
  loginRequest = {
    username: '',
    email: '',
    password: '',
  };

  signUpUser() {
    console.log(this.loginRequest);

    this.signUpService
      .signUpUser(
        this.loginRequest.username,
        this.loginRequest.email,
        this.loginRequest.password
      )
      .subscribe({
        next: (httpResult) => {
          if (httpResult.status === 200) {
            this.token = httpResult.body.token;
            this.signUpService.sigUp(this.token);
            const tokenInfo: any = jwtDecode(this.token);
            const role: String = tokenInfo.role[0].authority;
            if (role === environment.admin) {
              this.router.navigate(['admin']);
            } else if (role === environment.content_moderator) {
              this.router.navigate(['content-moderator']);
            } else if (role === environment.user) {
              this.router.navigate(['user']);
            }
            console.log(this.token);
          }
        },
        error: (error) => {
          console.log('error', error);
        },
        complete: () => {},
      });
  }
}

import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  userName: string = '';
  password: string = '';

  signIn() {
    this.loginService.authenticate(this.userName, this.password)

      .subscribe({
        next: (response: any) => {
          if (response.status == 200) {
            localStorage.setItem('token', response.body.token);
            localStorage.setItem('role', this.loginService.DecodeToken(response.body.token).role[0].authority);
            localStorage.setItem('userName', this.userName);


            this.loginService.getAccountDetails(this.userName).subscribe({
              next: (accountDetails: any) => {
                localStorage.setItem('accountNumber', accountDetails.accountNumber);
                this.router.navigate(['home']);
              },  
              error: (error: any) => {
                console.log("error : ", error);
                this.router.navigate(['addAccount']);
              },
              complete: () => {

              }
            });
          }
          else{
            this.router.navigate(['login']);
          }
        },
        error: (error: any) => {

        },
        complete: () => {

        }
      });

  }
}

import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.sass']
})
export class LoginTestComponent {

  constructor (private login:LoginService, private router:Router, private cookieService: CookieService, private appComponent: AppComponent) {}

  formResponse = {
    username:"",
    password:""
  }
  loginResponseFunction() {
    console.log("triggered");
    
    console.log(this.login)
    this.login.loginUser(this.formResponse.username,this.formResponse.password)
    .subscribe({
      next: (response) => {
        console.log("response",response);

        if(response.status === 200) {
          this.cookieService.set("logged_in","true");
          this.login.isLoggedIn = true;
          this.appComponent.hasLoggedIn = true;
        }
        else{
          throw new HttpErrorResponse({headers:response.headers,status:response.status,url:response.url?.toString()});
        }
      },
      error:(error) => {
        console.log(error);
        alert("Enter Valid Credentials");
      },
      complete: () => {
        this.router.navigate(['dashboard']);
      }
    })
    
    // this.login.login(this.formResponse.username,this.formResponse.password);
  }
}

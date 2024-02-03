import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    token: any = '';
    constructor(private loginService: LoginService, private cookieService: CookieService, private router: Router) { }
    login() {
        this.loginService.authenticate(this.email, this.password).subscribe({
            next: (token) => {
                this.token = token.body.token;
                console.log("token:", token.body.token);
                if (token.status == 200) {
                    localStorage.setItem('isLogged', 'true');
                    this.cookieService.set('isLogged', 'true');
                    // this.router.navigate(['dashboard']);
                }
            },
            error: (error) => {
                console.log("error:", error);
            },
            complete: () => {
                if (this.loginService.isAuthencticate()) {
                    this.router.navigate(['dashboard']);
                }
            }
        });
    }
}


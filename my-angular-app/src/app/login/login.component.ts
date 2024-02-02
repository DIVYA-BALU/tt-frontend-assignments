import { Component } from '@angular/core';
import { LoginService } from './login.service';
// import { CookieService } from ‘ngx - cookie - service’;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    token: any = '';
    constructor(private loginService: LoginService) { }
    login() {

        // this.loginService.authenticate(this.email, this.password).subscribe((token) => {
        //     this.token = token.body.token;
        //     console.log("token:", token);

        //     if (token.status == 200)
        //         localStorage.setItem('isLogged', 'true');
        //     else
        //         localStorage.setItem('isLogged', 'false');
        // }, (error) => {
        //     console.log("error", error);
        // });;

        this.loginService.authenticate(this.email, this.password).subscribe({
            next: (token) => {
                this.token = token.body.token;
                console.log("token:", token.body.token);
                if (token.status == 200)
                    localStorage.setItem('isLogged', 'true');
            },
            error: (error) => {
                console.log("error:", error);
                localStorage.setItem('isLogged', 'false');
            }
        });

    }
}


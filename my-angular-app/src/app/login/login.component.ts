import { OnInit, inject } from '@angular/core';
import { Component } from '@angular/core';
import { LoginService } from './login.service';


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
        this.loginService.authenticate(this.email, this.password).subscribe((token) => {
            this.token = token;
            console.log(token);
        }, (error) => {
            console.log("error", error);
        });;
    }
}


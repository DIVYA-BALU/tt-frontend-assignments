import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})          
export class LoginComponent {
    userName: string = '';
    password: string = '';
    token: any = '';
    constructor(private loginService: LoginService) { }
    login() {
        this.loginService.authenticate(this.userName, this.password).subscribe((token: any) => {
            console.log("no error", token);
            this.token = token;
        }, (error: any) => {
            console.log("error", error);
            this.token = error.error.text;
        });
        this.loginService.login(this.userName, this.password)

    }


}
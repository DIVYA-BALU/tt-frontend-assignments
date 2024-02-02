import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = "";
  password = "";

  constructor(private loginService: LoginService){}

  postData(){
    this.loginService.login(this.email, this.password).subscribe(
      data =>{
        this.loginService.loggedIn(true);
        console.log(data.accessToken);
      } ,
      error => console.log(error)    
    );    
  }
}

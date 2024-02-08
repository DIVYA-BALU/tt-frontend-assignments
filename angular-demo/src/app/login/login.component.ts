import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  token: any = '';
  constructor(private loginService: LoginService, private router:Router) {}
  loginRequest = {
    username: '',
    password: '',
  };

  loginUser() {
    console.log(this.loginRequest);

    this.loginService
      .loginUser(this.loginRequest.username, this.loginRequest.password)
      .subscribe({next: (httpResult) => {
        
        if(httpResult.status === 200){
        this.token = httpResult.body.token;
        this.loginService.login(this.token);
        this.router.navigate(['app-dashbord']);
        console.log(this.token);
        }
      },error:(error) => {
        console.log("error");
      },
    complete:()=>{
        
    }});
  }

  ngOnInit(): void {}
}

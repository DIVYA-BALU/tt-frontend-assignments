import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { loginRequest } from '../models/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  token: any = '';
  a = null;
  b = '';

  constructor(private loginService: LoginService, private router: Router) {
    console.log(typeof this.a, typeof this.b);
  }
  loginReq: loginRequest = {
    username: '',
    password: '',
  };

  loginUser() {
    console.log(this.loginReq);

    this.loginService
      .loginUser(this.loginReq.username, this.loginReq.password)
      .subscribe({
        next: (httpResult) => {
          console.log('suv');

          if (httpResult.status === 200) {
            this.token = httpResult.body.token;
            // console.log("perm -----",httpResult.body.perm);
            let permissions = httpResult.body.perm.rolePermmision.map((val:any)=>{
              return val.permision;
            })
            localStorage.setItem("permission",JSON.stringify(permissions))
            this.loginService.permission.next(permissions)
            // console.log(typeof localStorage.getItem("permission"), localStorage.getItem("permission"),JSON.parse(localStorage.getItem("permission") || "")[0]);
            
            localStorage.setItem('logged_in', 'true');
            this.loginService.login(this.token);
            const tokenInfo: any = jwtDecode(this.token);
            const role: String = tokenInfo.role[0].authority;
            // console.log(tokenInfo.id);
            this.loginService.setPermissions(tokenInfo.id);
            this.loginService.setUserId(this.token);

            localStorage.setItem('id', tokenInfo.id);
            if (role === environment.admin) {
              this.router.navigate(['admin']);
            } else if (role === environment.content_moderator) {
              this.router.navigate(['content-moderator']);
            } else if (role === environment.user) {
              this.router.navigate(['user']);
            }
            // console.log(tokenInfo.role[0].authority);
            // console.log(tokenInfo.role);
            // console.log(tokenInfo);
            // console.log(this.token);
          }
        },
        error: (error) => {
          alert('invalid username or password');

          console.log(error);
        },
      });
  }
}

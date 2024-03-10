import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponse } from 'src/app/core/models/API.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserDetailsService } from 'src/app/core/services/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private userDetailsService: UserDetailsService, private router: Router) {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value)
      .subscribe({
        next: (loginResponse: LoginResponse) => {
          this.isLoading = false;
          this.userDetailsService.setLoginResponseSubject(loginResponse);

          if (loginResponse.role.name === 'ADMIN') {
            this.router.navigate(['/admin/store-management']);
          }

          if (loginResponse.role.name === 'MANAGER')
            this.router.navigate(['/manager/products']);

          if (loginResponse.role.name === 'EMPLOYEE')
            this.router.navigate(['/employee']);
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          
          if (error.status === 404) {
            alert('invalid username or password');
          }
          else if (error.status === 0){
            alert('Unable to connect to the server')
          }
          else {
            alert(`${error.status} found`);
          }

        }

      });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

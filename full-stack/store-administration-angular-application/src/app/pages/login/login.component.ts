import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginRequest, LoginResponse } from 'src/app/core/models/API.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserDetailsService } from 'src/app/core/services/user-details.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean = false;
  isLoginClicked: boolean = false;
  private subscription: Subscription = new Subscription;
  constructor(private fb: FormBuilder, private authService: AuthService, private userDetailsService: UserDetailsService, private router: Router) {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login() {

    this.isLoginClicked = true;
    this.isLoading = true;
    
    if(this.loginForm.invalid){
      this.isLoading = false;
      return;
    }

    this.subscription = this.authService.login(this.loginForm.value)
      .subscribe({
        next: (loginResponse: LoginResponse) => {
          this.isLoading = false;
          this.userDetailsService.setLoginResponseSubject(loginResponse);

          if (loginResponse.role.name === 'ADMIN') {
            Swal.fire('Admin Login Successful');
            this.router.navigate(['/admin/store-management']);
          }

          if (loginResponse.role.name === 'MANAGER'){
            Swal.fire('Manager Login Successful');
            this.router.navigate(['/manager/products']);
          }

          if (loginResponse.role.name === 'EMPLOYEE'){
            Swal.fire('Employee Login Successful');
            this.router.navigate(['/employee']);
          }
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          
          if (error.status === 404) {
            Swal.fire('Invalid Email Id or Password!');
          }
          else if (error.status === 0){
            Swal.fire('Unable to connect to the server!');
          }
          else {
            Swal.fire(`${error.status} found`);
          }

        }

      });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}

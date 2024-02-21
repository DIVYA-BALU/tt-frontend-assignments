import { Component } from '@angular/core';
import { LoginService, login } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DoctorComponent } from '../doctor/doctor.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  loginForm = this.fb.group({
    email: ['admin1@admin.com', [Validators.email, Validators.required]],
    password: ['admin', Validators.required]

  });
  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  onSubmit() {
    // console.log(this.loginForm.value);
  }
  login(): void {
    if (!this.loginForm.invalid) {
      this.loginService.authenticate(<login>this.loginForm.value).subscribe({
        next: (token) => {
          if (token.status == 200) {
            this.cookieService.set('isLogged', 'true');
            sessionStorage.setItem('token', token.body.token);
            sessionStorage.setItem('email', (<login>this.loginForm.value).email);
            this.loginService.getUser().subscribe({
              next: (response) => {
                sessionStorage.setItem('role', response.role);
              },
              complete: () => {
                this.loginService.getUser().subscribe({
                  next: (response) => {
                    if (sessionStorage.getItem('role') === 'PATIENT') {
                      sessionStorage.setItem('firstname', response.patientFirstName);
                      sessionStorage.setItem('lastname', response.patientLastName);
                      sessionStorage.setItem('id', response.patientId);
                      sessionStorage.setItem('phoneno', response.patientContact);
                    } else if (sessionStorage.getItem('role') === 'DOCTOR') {
                      sessionStorage.setItem('firstname', response.doctorFristName);
                      sessionStorage.setItem('lastname', response.doctorLastName);
                      sessionStorage.setItem('id', response.doctorId);
                      sessionStorage.setItem('specialization', response.specialization);
                      sessionStorage.setItem('inTime', response.inTime);
                      sessionStorage.setItem('outTime', response.outTime);
                    } else if (sessionStorage.getItem('role') === 'RECEPTIONIST') {
                      sessionStorage.setItem('firstname', response.receptionistFristName);
                      sessionStorage.setItem('lastname', response.receptionistLastName);
                      sessionStorage.setItem('id', response.receptionist_id);
                    } else if (sessionStorage.getItem('role') === 'ADMIN') {
                      sessionStorage.setItem('firstname', response.firstname);
                      sessionStorage.setItem('lastname', response.lastname);
                      sessionStorage.setItem('id', response.id);
                      sessionStorage.setItem('phoneno', response.phoneno);
                    }
                  },
                });
              },
            });
          }
        },
        error: (error) => {
          console.log('error:', error);
          Swal.fire({
            title: 'Enter Valid User Details!',
            text: 'Try again',
            icon: 'error',
          });
        },
        complete: () => {
          Swal.fire({
            title: 'Login Success',
            text: 'redirected to dashboard',
            icon: 'success',
          });
          if (this.loginService.isAuthencticate()) {
            this.router.navigate(['dashboard']);
          }
        },
      });
    }
  }
  registerPage() {
    this.router.navigate(['register']);
  }
  loginPage() {
    this.router.navigate(['login']);
  }
  homePage() {
    this.router.navigate(['home']);
  }

}

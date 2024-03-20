import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}

  private subscription: Subscription = new Subscription();
  formResponse: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.minLength(1)]],
    password: ['', [Validators.required, Validators.minLength(1)]],
  });

  login() {
    if (this.formResponse.invalid) {
      alert('invalid input');
      return;
    }
    Swal.showLoading();
    this.subscription = this.authService
      .login(this.formResponse.value)
      .subscribe({
        next: (token) => {
          Swal.close();
          localStorage.setItem('token', token.token);
          const tokenInfo: any = jwtDecode(token.token);
          const role: string = tokenInfo.role[0].authority;
          this.authService.setLogin(tokenInfo.id);
          this.authService.setRole(role);
          if (role === environment.admin) {
            this.route.navigate(['admin']);
          } else if (role === environment.organization) {
            this.route.navigate(['organization']);
          } else if (
            role === environment.adopter ||
            role === environment.veterinaryDoctor
          ) {
            this.route.navigate(['pet']);
          }
        },
        error: () => {
          Swal.fire({
            title: 'Invalid Credential!',
            text: 'Please check the mail id and password',
            icon: 'error',
          });
        },
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

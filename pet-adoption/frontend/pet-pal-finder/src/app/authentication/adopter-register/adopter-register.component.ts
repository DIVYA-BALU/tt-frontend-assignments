import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Subscription } from 'rxjs';
import { Otp, StatusMessage, Token, User } from 'src/app/models/models';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-adopter-register',
  templateUrl: './adopter-register.component.html',
  styleUrls: ['./adopter-register.component.scss'],
})
export class AdopterRegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  isOtpSend: boolean = false;

  otp: Otp = { email: '', otp: 0 };

  user: User = {
    email: '',
    password: '',
    role: 'ADOPTER',
  };
  private subscription: Subscription = new Subscription();
  formResponse: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.minLength(1)]],
    password: ['', [Validators.required, Validators.minLength(1)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(1)]],
    otp: [0],
  });

  verifyEmail() {
    if (this.formResponse.invalid || this.formResponse.value.password !== this.formResponse.value.confirmPassword) {
      console.log(this.formResponse.value);
      return;
    }
    this.subscription = this.authService
      .verifyEmail(this.formResponse.value.email)
      .subscribe({
        next: (status: StatusMessage) => {
          if (status.message === 'Mail Sent Successfully') {
            this.isOtpSend = true;
            this.otp.email = this.formResponse.value.email;
            console.log(status);
          } else {
            alert(status.message);
            console.log(status);
          }
          console.log("component");
          
        },
      });
  }

  verifyOtp() {
    this.otp.otp = this.formResponse.value.otp;
    console.log("c",this.otp);
    
    this.authService.verifyOtp(this.otp).subscribe({
      next: (status:StatusMessage) => {
        console.log(status);
        
        if (status.message === 'invalid otp') {
          alert(status.message);
        } else if (status.message === 'otp time has exceed') {
          alert(`${status.message} \n please click resend otp button`);
        } else if (status.message === 'otp verified') {
          this.user.email = this.formResponse.value.email;
          this.user.password = this.formResponse.value.password;
          this.authService
            .registerUser(this.user)
            .subscribe({ next: (token:Token) => {
              console.log(token);
              
              localStorage.setItem("token",token.token);
              localStorage.setItem("refresh-token",token.refreshToken);
              const tokenInfo: any = jwtDecode(token.token);
              const role: string = tokenInfo.role[0].authority;
              this.authService.setLogin(tokenInfo.id);
              this.authService.setRole(role)
            } });
          this.router.navigate(['/pet/profile']);
        } else {
          alert('server down');
        }
      },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  login() {
    if (this.formResponse.invalid) {
      console.log('invalid');
    }
    console.log(this.formResponse.value);
  }
}

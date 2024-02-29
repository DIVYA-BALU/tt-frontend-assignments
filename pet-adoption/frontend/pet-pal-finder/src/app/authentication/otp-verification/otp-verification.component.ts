import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Otp } from 'src/app/models/models';
import { EmailVerificationService } from 'src/app/service/email-verification.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss'],
})
export class OtpVerificationComponent {
  otp: Otp = {
    email: '',
    otp: 0,
  };

  constructor(
    private emailVerificationService: EmailVerificationService,
    private router: Router
  ) {
    emailVerificationService.sharedEmail$.subscribe({
      next: (val) => {
        this.otp.email = val;
      },
    });
  }

  verifyOtp() {
    this.emailVerificationService.verifyOtp(this.otp).subscribe({
      next: (status) => {
        if (status.message === 'invalid otp') {
          alert(status.message);
        } 
        else if (status.message === 'otp time has exceed') {
          alert(`${status.message} \n please click resend otp button`);
        } 
        else if (status.message === 'otp verified') {
          this.router.navigate(['create-password']);
        } 
        else {
          alert('server down');
        }
      },
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmailVerificationRequest } from 'src/app/models/models';
import { EmailVerificationService } from 'src/app/service/email-verification.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
})
export class EmailVerificationComponent {

  formResponse:FormGroup = this.formBuilder.group({
    email:["",[Validators.required,Validators.email,Validators.minLength(1)]],
    role:[false]
  })

  private subscription: Subscription = new Subscription;
  emailVerificationRequest: EmailVerificationRequest = {
    email: '',
  };

  constructor(private emailVerificationService: EmailVerificationService,private router:Router,private formBuilder:FormBuilder) {}

  verifyEmail() {
    if(this.formResponse.invalid){
      console.log(this.formResponse.value);
      return
      
    }
    this.subscription = this.emailVerificationService
      .verifyEmail(this.emailVerificationRequest)
      .subscribe({
        next: (status) => {
          if (status.message === "Mail Sent Successfully") {
            this.router.navigate(['/auth/otp-verification']);
            console.log(status);
            
          } else {
            alert(status.message);
            console.log(status);
          }
        },
      });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

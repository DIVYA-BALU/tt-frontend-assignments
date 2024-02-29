import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/models';
import { EmailVerificationService } from 'src/app/service/email-verification.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
})
export class CreatePasswordComponent {
emailSubscription:Subscription = new Subscription();
  user:User ={
    email: '',
    password: '',
    role: ''
  };

  constructor(private formBuilder: FormBuilder, private emailVerifictionService:EmailVerificationService) {
    this.emailSubscription = emailVerifictionService.sharedEmail$.subscribe({next : (email) => {
      this.user.email = email;
    }})
  }

  formResponse: FormGroup = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(1)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(1)]],
  });

  createPassword() {
    if(this.formResponse.value.password === this.formResponse.value.confirmPassword){

    }else{
      alert("password do not matches")
    }

  }

  ngOnDestory(){
    this.emailSubscription.unsubscribe()
  }

}

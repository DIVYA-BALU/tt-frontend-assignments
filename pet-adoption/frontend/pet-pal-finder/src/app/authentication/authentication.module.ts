import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component'
import {MatTabsModule} from '@angular/material/tabs';
import { AdopterRegisterComponent } from './adopter-register/adopter-register.component';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
import { VeterinaryDoctorRegisterComponent } from './veterinary-doctor-register/veterinary-doctor-register.component'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    EmailVerificationComponent,
    OtpVerificationComponent,
    LoginComponent,
    CreatePasswordComponent,
    ProfileDetailsComponent,
    RegisterComponent,
    AdopterRegisterComponent,
    OrganizationRegisterComponent,
    VeterinaryDoctorRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AuthenticationModule { }

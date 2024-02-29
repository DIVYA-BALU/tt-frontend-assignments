import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { LoginComponent } from './login/login.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'otp-verification', component: OtpVerificationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile-details', component: ProfileDetailsComponent },
  { path: 'create-password', component:CreatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}

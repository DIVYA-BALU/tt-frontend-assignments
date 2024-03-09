import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueComponent } from './components/issue/issue.component';
import { ForgotpassComponent } from './components/Authentication_Pages/forgotpass/forgotpass.component';
import { LoginComponent } from './components/Authentication_Pages/login/login.component';
import { SignupComponent } from './components/Authentication_Pages/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RaiseIssueComponent } from './components/raise-issue/raise-issue.component';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { AdminLoginComponent } from './components/Authentication_Pages/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'adminhome', component: AdminHomeComponent, canActivate: [AuthGuard]},
  { path: 'make-payments', component: PaymentComponent, canActivate: [AuthGuard]},
  { path: 'profile', component:IssueComponent, canActivate: [AuthGuard]},
  { path: 'raise', component:RaiseIssueComponent, canActivate: [AuthGuard]},
  { path: 'history', component:VotingHistoryComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

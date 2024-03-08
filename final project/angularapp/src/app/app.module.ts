import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IssueComponent } from './components/issue/issue.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpassComponent } from './components/Authentication_Pages/forgotpass/forgotpass.component';
import { LoginComponent } from './components/Authentication_Pages/login/login.component';
import { SignupComponent } from './components/Authentication_Pages/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { RaiseIssueComponent } from './components/raise-issue/raise-issue.component';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { AdminLoginComponent } from './components/Authentication_Pages/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssueComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    HomeComponent,
    RaiseIssueComponent,
    VotingHistoryComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

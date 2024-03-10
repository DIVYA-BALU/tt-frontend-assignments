import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { StudentsComponent } from './components/students/students.component';
import { FundersComponent } from './components/funders/funders.component';
import { FindstudentsComponent } from './components/findstudents/findstudents.component';
import { RegisterComponent } from './components/register/register.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StudentprofileComponent } from './components/studentprofile/studentprofile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FunderprofileComponent } from './components/funderprofile/funderprofile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './components/users/users.component';
import { FundsComponent } from './components/funds/funds.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { AllfundersComponent } from './components/allfunders/allfunders.component';
import { UpdateadminprofileComponent } from './components/updateadminprofile/updateadminprofile.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StudentregistrationComponent } from './components/studentregistration/studentregistration.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { UpdatestudentprofileComponent } from './components/updatestudentprofile/updatestudentprofile.component';
import { StorycreationComponent } from './components/storycreation/storycreation.component';
import { UpdatefunderprofileComponent } from './components/updatefunderprofile/updatefunderprofile.component';
import { FundedstudentsComponent } from './components/fundedstudents/fundedstudents.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    StudentsComponent,
    FundersComponent,
    FindstudentsComponent,
    RegisterComponent,
    StudentprofileComponent,
    FunderprofileComponent,
    ViewstudentComponent,
    TestimonialComponent,
    TermsComponent,
    PrivacypolicyComponent,
    AdminprofileComponent,
    UsersComponent,
    FundsComponent,
    ApprovalsComponent,
    AllstudentsComponent,
    AllfundersComponent,
    UpdateadminprofileComponent,
    StudentregistrationComponent,
    UpdatestudentprofileComponent,
    StorycreationComponent,
    UpdatefunderprofileComponent,
    FundedstudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextFieldModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSliderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

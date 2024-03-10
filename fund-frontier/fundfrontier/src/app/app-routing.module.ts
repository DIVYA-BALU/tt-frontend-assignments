import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { StudentsComponent } from './components/students/students.component';
import { FundersComponent } from './components/funders/funders.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentprofileComponent } from './components/studentprofile/studentprofile.component';
import { FunderprofileComponent } from './components/funderprofile/funderprofile.component';
import { FindstudentsComponent } from './components/findstudents/findstudents.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { UsersComponent } from './components/users/users.component';
import { FundsComponent } from './components/funds/funds.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { AllfundersComponent } from './components/allfunders/allfunders.component';
import { UpdateadminprofileComponent } from './components/updateadminprofile/updateadminprofile.component';
import { StudentregistrationComponent } from './components/studentregistration/studentregistration.component';
import { UpdatestudentprofileComponent } from './components/updatestudentprofile/updatestudentprofile.component';
import { StorycreationComponent } from './components/storycreation/storycreation.component';
import { UpdatefunderprofileComponent } from './components/updatefunderprofile/updatefunderprofile.component';
import { FundedstudentsComponent } from './components/fundedstudents/fundedstudents.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "header/home",
    pathMatch: 'full'

  },
  {
    path: "header",
    component: HeaderComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "aboutus",
        component: AboutusComponent
      },
      {
        path: "students",
        component: StudentsComponent
      },
      {
        path: "funders",
        component: FundersComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "studentprofile",
        component: StudentprofileComponent,
        children: [
          {
            path: "updatestudent",
            component: UpdatestudentprofileComponent
          },
          {
            path: "createstory",
            component: StorycreationComponent
          }
        ]
      },
      {
        path: "funderprofile",
        component: FunderprofileComponent,
        children: [
          {
            path: "updatefunder",
            component: UpdatefunderprofileComponent
          },
          {
            path: "fundedstudents",
            component: FundedstudentsComponent
          }
        ]
      },
      {
        path: "findstudents",
        component: FindstudentsComponent
      },
      {
        path: "testimonial",
        component: TestimonialComponent

      },
      {
        path: "terms",
        component: TermsComponent
      },
      {
        path: "privacy",
        component: PrivacypolicyComponent
      },
      {
        path: "adminprofile",
        component: AdminprofileComponent,
        children: [
          {
            path: "users",
            component: UsersComponent
          },
          {
            path: "funds",
            component: FundsComponent
          },
          {
            path: "approvals",
            component: ApprovalsComponent
          },
          {
            path: "allstudents",
            component: AllstudentsComponent
          },
          {
            path: "allfunders",
            component: AllfundersComponent
          },
          {
            path: "editadminprofile",
            component: UpdateadminprofileComponent
          }
        ]

      },
      {
        path: "studententregistration",
        component: StudentregistrationComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

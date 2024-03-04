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

const routes: Routes = [
  {
    path:"",
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
      },{
        path : "home",
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
        component: StudentprofileComponent
      },
      {
        path: "funderprofile",
        component: FunderprofileComponent
      },
      {
        path: "findstudents",
        component: FindstudentsComponent
      },
      {
        path:"testimonial",
        component: TestimonialComponent
      
      },
      {
        path: "terms",
        component: TermsComponent
      },
      {
        path: "privacy",
        component: PrivacypolicyComponent
      }
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

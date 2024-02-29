import { Route } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { VeterinaryDoctorComponent } from "../veterinary-doctor/veterinary-doctor.component";

export const ADMIN_ROUTES: Route[] = [
  { path:"", loadComponent:() => import("src/app/landing-page/landing-page.component").then(d => d.LandingPageComponent),
  children: [
    { path: '', component: HomeComponent },
    { path: 'doctor', component: VeterinaryDoctorComponent },
  ]}
   
  ];
  
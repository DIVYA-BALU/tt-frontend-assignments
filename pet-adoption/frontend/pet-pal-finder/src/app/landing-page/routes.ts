import { Route } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { VeterinaryDoctorComponent } from "../veterinary-doctor/veterinary-doctor.component";
import { AuthGuard } from "../guards/auth.guard";

export const ADMIN_ROUTES: Route[] = [
  { path:"", loadComponent:() => import("src/app/landing-page/landing-page.component").then(d => d.LandingPageComponent),
  children: [
    { path: '', loadComponent:() => import("src/app/home/home.component").then(d => d.HomeComponent) },
    { path: 'doctor',loadComponent:() => import("src/app/veterinary-doctor/veterinary-doctor.component").then(d => d.VeterinaryDoctorComponent) },
    { path:"pet-profile/:id", loadComponent:() => import("src/app/pet-profile/pet-profile.component").then(d => d.PetProfileComponent)},
    { path:"requests", loadComponent:() => import("src/app/view-request-status/view-request-status.component").then(d => d.ViewRequestStatusComponent),canActivate:[AuthGuard]},
    { path:"profile", loadComponent:() => import("src/app/profile/profile.component").then(d => d.ProfileComponent),canActivate:[AuthGuard]}
  ]}
   
  ];
  
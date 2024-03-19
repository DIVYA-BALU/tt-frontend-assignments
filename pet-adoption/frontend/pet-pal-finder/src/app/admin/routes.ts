import { Route } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";

export const ADMIN_ROUTES: Route[] = [
  { path:"", loadComponent:() => import("src/app/admin/admin.component").then(d => d.AdminComponent),
  children: [
    { path: '', loadComponent:() => import("src/app/admin-home/admin-home.component").then(d => d.AdminHomeComponent) },
    { path: 'organization',loadComponent:() => import("src/app/organization-registration-request-card/organization-registration-request-card.component").then(d => d.OrganizationRegistrationRequestCardComponent) },
    { path:"doctor", loadComponent:() => import("src/app/doctor-registration-request-card/doctor-registration-request-card.component").then(d => d.DoctorRegistrationRequestCardComponent)},
  ]}
   
  ];
  
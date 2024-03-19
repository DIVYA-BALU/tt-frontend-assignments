import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"/pet",pathMatch:"full"},
  { path:"admin", loadChildren:() => import("src/app/admin/routes").then(d => d.ADMIN_ROUTES),canActivate:[AuthGuard]},
  { path:"organization", loadComponent:() => import("src/app/organization/organization.component").then(d => d.OrganizationComponent),canActivate:[AuthGuard]},
  { path:"pet", loadChildren:() => import("src/app/landing-page/routes").then(d => d.ADMIN_ROUTES)},
  {path:"auth", loadChildren:() => import("./authentication/authentication.module").then((d) => d.AuthenticationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

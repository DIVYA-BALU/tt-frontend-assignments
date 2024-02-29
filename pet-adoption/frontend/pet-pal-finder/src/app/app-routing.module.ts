import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"/pet",pathMatch:"full"},
  { path:"admin", loadComponent:() => import("src/app/admin/admin.component").then(d => d.AdminComponent)},
  { path:"pet", loadChildren:() => import("src/app/landing-page/routes").then(d => d.ADMIN_ROUTES)},
  {path:"auth", loadChildren:() => import("./authentication/authentication.module").then((d) => d.AuthenticationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

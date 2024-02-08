import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ContentModeratorComponent } from './content-moderator/content-moderator.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"user", loadChildren:() => import("./user/user.module").then((d) => d.UserModule),canActivate:[AuthGuard]},
  {path:"content-moderator", loadChildren:() => import("./content-moderator/content-moderator.module").then((d) => d.ContentModeratorModule),canActivate:[AuthGuard]},
  {path:"admin", loadChildren:() => import("./admin/admin.module").then((d) => d.AdminModule),canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

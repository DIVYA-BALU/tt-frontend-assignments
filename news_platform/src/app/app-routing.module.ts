import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoleGuard } from './guard/role.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: 'full'
   },
   {
    path: "login",
    loadChildren: () => import("./login/login.module").then(module => module.LoginModule)
   },
   {
    path: "signup",
    loadChildren: () => import("./signup/signup.module").then(module => module.SignupModule)
   },
   {
    path: "user",
    loadChildren: () => import("./user/user.module").then(module => module.UserModule)
   },
   {
    path: "employee",
    loadChildren: () => import("./employees/employees.module").then(module => module.EmployeesModule),
    canActivate: [RoleGuard]
   },
   {
    path: "**",
    component: PagenotfoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

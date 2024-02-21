import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule } from '@angular/forms';
const appRoute: Routes = [
  {
    path: '', loadChildren: () =>
      import('./home/home.module').then((d) => d.HomeModule),
  },

  {
    path: 'home', loadChildren: () =>
      import('./home/home.module').then((d) => d.HomeModule),
  },

  {
    path: 'register', loadChildren: () =>
      import('./register/register.module').then((d) => d.RegisterModule)
  },

  {
    path: 'login', loadChildren: () =>
      import('./login/login.module').then((d) => d.LoginModule),
  },

  {
    path: 'dashboard', canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((d) => d.DashboardModule)
  },

  {
    path: 'dashboard/appointment', canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((d) => d.DashboardModule)
  },

  {
    path: 'dashboard/profile', canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((d) => d.DashboardModule)
  },

  {
    path: 'dashboard/setting', canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((d) => d.DashboardModule)
  },
  {
    path: 'dashboard/about', canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((d) => d.DashboardModule)
  },

]

@NgModule({
  imports: [RouterModule.forRoot(appRoute), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

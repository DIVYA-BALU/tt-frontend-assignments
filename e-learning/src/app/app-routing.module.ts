import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(module => module.SignupModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule)
  },
  {
    path: 'pword',
    loadChildren: () => import('./change-password/change-password.module').then(module => module.ChangePasswordModule)
  },
  {
    path: 'teach',
    loadChildren: () => import('./teach/teach.module').then(module => module.TeachModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

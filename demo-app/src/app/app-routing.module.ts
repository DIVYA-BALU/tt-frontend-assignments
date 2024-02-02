import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [ 
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]}, 
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard]}, 
  { path: 'login', loadChildren: () => import('./login/login.module').then( module => module.LoginModule)}
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ExploreComponent } from '../explore/explore.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuard } from '../auth.guard';
import { AddpostComponent } from '../addpost/addpost.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';

const routes: Routes = [
  { path:"",component:UserComponent, children:[
    { path:"",component:UserHomeComponent,canActivate:[AuthGuard]},
    { path:"explore",component:ExploreComponent,canActivate:[AuthGuard]},
    { path:"profile",component:ProfileComponent,canActivate:[AuthGuard]},
    { path:"add-post",component:AddpostComponent,canActivate:[AuthGuard]},
    { path:"view-user-profile",component:ViewUserProfileComponent,canActivate:[AuthGuard]},
  ],canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

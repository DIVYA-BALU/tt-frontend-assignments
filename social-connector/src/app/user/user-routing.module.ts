import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { ExploreComponent } from '../explore/explore.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  { path:"",component:UserComponent, children:[
    { path:"",component:UserHomeComponent},
    { path:"explore",component:ExploreComponent},
    { path:"profile",component:ProfileComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

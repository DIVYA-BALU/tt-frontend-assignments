import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentModeratorComponent } from './content-moderator.component';
import { AuthGuard } from '../auth.guard';
import { ContentModeratorHomeComponent } from '../content-moderator-home/content-moderator-home.component';

const routes: Routes = [
  { path:"",component:ContentModeratorComponent,children:[
    { path:"",component:ContentModeratorHomeComponent,canActivate:[AuthGuard]}
  ],canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentModeratorRoutingModule { }

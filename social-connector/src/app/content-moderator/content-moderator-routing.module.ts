import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentModeratorComponent } from './content-moderator.component';

const routes: Routes = [
  { path:"",component:ContentModeratorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentModeratorRoutingModule { }

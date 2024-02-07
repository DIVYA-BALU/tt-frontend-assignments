import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachComponent } from './teach.component';

const routes: Routes = [
  {
    path: '',
    component: TeachComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachRoutingModule { }

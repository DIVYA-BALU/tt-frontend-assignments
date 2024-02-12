import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentViewComponent } from './enrollment-view.component';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentViewRoutingModule { }

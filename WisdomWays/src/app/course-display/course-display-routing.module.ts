import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDisplayComponent } from './course-display.component';

const routes: Routes = [
  {
    path: '',
    component: CourseDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDisplayRoutingModule { }

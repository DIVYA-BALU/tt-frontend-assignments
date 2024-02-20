import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDisplayRoutingModule } from './course-display-routing.module';
import { CourseDisplayComponent } from './course-display.component';


@NgModule({
  declarations: [
    CourseDisplayComponent,
  ],
  imports: [
    CommonModule,
    CourseDisplayRoutingModule
  ]
})
export class CourseDisplayModule { }

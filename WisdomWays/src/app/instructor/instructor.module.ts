import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorComponent } from './instructor.component';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    InstructorComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    FormsModule,
    MatTooltipModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InstructorModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentViewRoutingModule } from './enrollment-view-routing.module';
import { EnrollmentViewComponent } from './enrollment-view.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    EnrollmentViewComponent
  ],
  imports: [
    CommonModule,
    EnrollmentViewRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EnrollmentViewModule { }

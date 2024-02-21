import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppointmentCompComponent } from './appointment-comp.component';
import { CalendarModule } from 'primeng/calendar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
const appRoute: Routes = [
  {
    path: '',
    component: AppointmentCompComponent,
  },
];

@NgModule({
  declarations: [AppointmentCompComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute),
    CalendarModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [RouterModule],
})
export class AppointmentCompModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { datePipe } from '../pipe/date.pipe';
import { CanEditDirective } from '../custom-directives/can-edit.directive';

const appRoute: Routes = [
  {
    path: '',
    component: AppointmentComponent,
  },
];

@NgModule({
  declarations: [AppointmentComponent, CanEditDirective],
  exports: [RouterModule],
  imports: [CommonModule,
    RouterModule.forChild(appRoute),
    MatButtonModule,
    MatCardModule,
    MatDialogModule, datePipe]
})
export class AppointmentModule { }

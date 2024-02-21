import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const appRoute: Routes = [
  {
    path: "", component: PatientComponent,
    children:
      []
  },
]

@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute),
    FormsModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [RouterModule]
})
export class PatientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent } from './view-user.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const appRoute: Routes = [
  {
    path: '',
    component: ViewUserComponent,
  },
];

@NgModule({
  declarations: [ViewUserComponent],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(appRoute),
    FormsModule,
    MatButtonModule,
    MatCardModule
  ],
})
export class ViewUserModule { }

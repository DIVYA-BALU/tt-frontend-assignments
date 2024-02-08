import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  {
    path: "admin", component: AdminComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewStatementRoutingModule } from './view-statement-routing.module';
import { ViewStatementComponent } from './view-statement.component';


@NgModule({
  declarations: [
    ViewStatementComponent
  ],
  imports: [
    CommonModule,
    ViewStatementRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ViewStatementModule { }

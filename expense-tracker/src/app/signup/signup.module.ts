import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';


@NgModule({
  declarations: [
    SignupComponent 
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SignupModule { }

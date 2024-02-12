import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachRoutingModule } from './teach-routing.module';
import { FormsModule } from '@angular/forms';
import { TeachComponent } from './teach.component';


@NgModule({
  declarations: [
    TeachComponent
  ],
  imports: [
    CommonModule,
    TeachRoutingModule,
    FormsModule
  ]
})
export class TeachModule { }

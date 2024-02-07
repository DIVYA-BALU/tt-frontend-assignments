import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachRoutingModule } from './teach-routing.module';
import { TeachComponent } from './teach.component';


@NgModule({
  declarations: [
    TeachComponent
  ],
  imports: [
    CommonModule,
    TeachRoutingModule
  ]
})
export class TeachModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutehideDirective } from './routehide.directive';

@NgModule({
  declarations: [
    RoutehideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoutehideDirective
  ]
})
export class RoutehideModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'

import { ViewStatementRoutingModule } from './view-statement-routing.module';
import { ViewStatementComponent } from './view-statement.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { EditDirectiveDirective } from '../permissions/edit-directive.directive';
import { DeleteDirectiveDirective } from '../permissions/delete-directive.directive';


@NgModule({
  declarations: [
    ViewStatementComponent,
    SearchBarComponent,
    EditDirectiveDirective,
    DeleteDirectiveDirective
  ],
  imports: [
    CommonModule,
    ViewStatementRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class ViewStatementModule { }

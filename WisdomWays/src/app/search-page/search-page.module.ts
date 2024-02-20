import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { SearchPageRoutingModule } from './search-page-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchPageModule { }

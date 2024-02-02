import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomFilterPipe } from './custom-filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { LodashdemoComponent } from './lodashdemo/lodashdemo.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent,
    MovieTableComponent,
    CustomFilterPipe,
    HighlightDirective,
    LodashdemoComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

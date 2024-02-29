import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { StudentsComponent } from './components/students/students.component';
import { FundersComponent } from './components/funders/funders.component';
import { FindstudentsComponent } from './components/findstudents/findstudents.component';
import { RegisterComponent } from './components/register/register.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StudentprofileComponent } from './components/studentprofile/studentprofile.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    StudentsComponent,
    FundersComponent,
    FindstudentsComponent,
    RegisterComponent,
    StudentprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

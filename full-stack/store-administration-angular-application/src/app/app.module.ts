import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermissionDirective } from './directives/permission.directive';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import {MatListModule} from '@angular/material/list';
import { PopUpComponent } from './pages/pop-up/pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
    PermissionDirective,
    LoginComponent,
    LayoutComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

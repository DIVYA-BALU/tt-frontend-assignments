import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth.interceptor';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { InstructorHeaderComponent } from './instructor-header/instructor-header.component';
import { EnrollmentViewComponent } from './enrollment-view/enrollment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    InstructorHeaderComponent,
    EnrollmentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

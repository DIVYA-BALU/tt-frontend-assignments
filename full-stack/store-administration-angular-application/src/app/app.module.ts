import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PermissionDirective } from './directives/permission.directive';
import { PermissionsDirective } from './directives/permissions.directive';

@NgModule({
  declarations: [
    AppComponent,
    PermissionDirective,
    PermissionsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

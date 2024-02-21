import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentModeratorComponent } from './content-moderator/content-moderator.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReadPostReportDirective } from './read-post-report.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UserComponent,
    ContentModeratorComponent,
    ParentComponent,
    ChildComponent,
    ReadPostReportDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},HttpClient,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

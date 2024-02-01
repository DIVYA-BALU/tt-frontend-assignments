import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { filterClass } from './custom/custom.filter';
import { HighlightDirective } from './custom/custom-attribute.directive';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    filterClass,
    HighlightDirective,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

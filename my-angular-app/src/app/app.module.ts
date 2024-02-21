import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { filterClass } from './custom-directive/custom.filter';
import { HighlightDirective } from './custom-directive/custom-attribute.directive';
import { ThirdComponent } from './third/third.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { MouseDirective } from './custom-directive/mouse.directive';

@NgModule({
  declarations: [
    AppComponent,AdminComponent,
    ChildComponent,
    ThirdComponent,
    LoginComponent,
    MouseDirective,
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

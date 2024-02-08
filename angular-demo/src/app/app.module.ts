import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SampleListComponent } from './sample-list/sample-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from './customfilter.filter';
import { LodashExampleComponent } from './lodash-example/lodash-example.component';
import { CustomDirective } from './custom.directive';
import { LodashDifferentExampleComponent } from './lodash-different-example/lodash-different-example.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleListComponent,
    ParentComponent,
    ChildComponent,
    OrdinalPipe,
    LodashExampleComponent,
    CustomDirective,
    LodashDifferentExampleComponent,
    LoginComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

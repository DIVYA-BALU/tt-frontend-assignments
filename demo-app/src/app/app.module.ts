import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { CustomfilterPipe } from './customfilter.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { LodashExampleComponent } from './lodash-example/lodash-example.component'; 
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    HighlightDirective,
    CustomfilterPipe,
    AboutComponent,
    ContactComponent,
    LodashExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomDirective } from './custom.directive';
import { StructuralDirective } from './structural.directive';
import { CustomPipe } from "./custom.pipe";
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { Subscription } from 'rxjs';

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        ParentComponent,
        ChildComponent,
        CustomDirective,
        StructuralDirective,
        FirstComponent,
        SecondComponent,
        LoginTestComponent,
        SampleComponent,
        Sample2Component,
        // DashboardComponent
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CustomPipe,
        FormsModule,
    ]
})
export class AppModule { }

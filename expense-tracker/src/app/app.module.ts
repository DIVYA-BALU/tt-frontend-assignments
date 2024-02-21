import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login/login.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { DebounceComponent } from './debounce/debounce.component';
import { CommonService } from './service/common.service';
import { CommonServiceService } from './permissions/common-service.service';
// import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateTransactionComponent,
    ListUsersComponent,
    DebounceComponent,
    // SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [LoginService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor,
      multi: true
    },
    CommonServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

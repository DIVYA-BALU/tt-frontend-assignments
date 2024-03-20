import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationBarChartComponent } from './user-registration-bar-chart/user-registration-bar-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { CityRegistrationCountComponent } from './city-registration-count/city-registration-count.component';
import { UserDensityMapComponent } from './user-density-map/user-density-map.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationBarChartComponent,
    CityRegistrationCountComponent,
    UserDensityMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

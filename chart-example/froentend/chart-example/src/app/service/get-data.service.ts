import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CityCount, DensityByCoordinates, HourlyLoginActivity, RegistrationCount} from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  getDensity(){
    return this.http.get<DensityByCoordinates[]>('http://localhost:8080/user/density')
  }

  getCityCount(){
    return this.http.get<CityCount[]>('http://localhost:8080/user/city')
  }

  getRegistrationCountByMonth(){
    return this.http.get<RegistrationCount[]>('http://localhost:8080/user/registration-count')
  }

  getHourlyLogin(){
    return this.http.get<HourlyLoginActivity[]>('http://localhost:8080/login')
  }
}

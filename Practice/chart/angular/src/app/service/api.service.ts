import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CityCount, UserDensity, UserEnrollmentDetails } from '../models/API.models';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getUserEnrollmentdetails(): Observable<UserEnrollmentDetails[]>{
    return this.http.get<UserEnrollmentDetails[]>(`${environment.API_URL}userDetails/registrationMonthCount`);
  }

  getCountOfCities(): Observable<CityCount[]>{
    return this.http.get<CityCount[]>(`${environment.API_URL}userDetails/registrationCountOfCities`);
  }

  getUserDensity(): Observable<UserDensity[]>{
    return this.http.get<UserDensity[]>(`${environment.API_URL}userDetails/userDensity`);
  }
}


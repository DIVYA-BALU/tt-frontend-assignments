import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  private baseUrl = "http://localhost:8080/location";
  constructor(private httpClient: HttpClient) { }

  //to add new location
  addLocation(location:Location): Observable<any>{
    let url = `${this.baseUrl}/newLocation`;
    return this.httpClient.post(url, location);
  }

  getAllLocations(id:string):Observable<any>{
    let url = `${this.baseUrl}/getAll/${id}`;
    return this.httpClient.get(url);
  }
}

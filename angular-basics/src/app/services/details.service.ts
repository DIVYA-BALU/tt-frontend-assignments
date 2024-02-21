import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../details.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private baseUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }
  
  getDetails(): Observable<Details[]> {
    return this.http.get<Details[]>(`${this.baseUrl}/posts`);
  }

}
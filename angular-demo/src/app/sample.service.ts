import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sample } from './sample.interface';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getComments(): Observable<sample[]> {
    return this.http.get<sample[]>(`${this.baseUrl}/posts`);
  }
}

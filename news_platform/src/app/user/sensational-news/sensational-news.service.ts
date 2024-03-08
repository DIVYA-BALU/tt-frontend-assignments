import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/News';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SensationalNewsService {

  url: string = environment.getSensationalNewsUrl;

  constructor(private http: HttpClient) { }

  getSensationalNews(): Observable<News[]> {
    return this.http.get<News[]>(this.url);
  }
}

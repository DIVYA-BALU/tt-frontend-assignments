import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/News';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url: string = environment.searchUrl;

  constructor(private http: HttpClient) { }

  getSearchValue(value: string): Observable<News[]>{
    console.log(`${this.url}/${value}`);
    
    return this.http.get<News[]>(`${this.url}/${value}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/News';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = environment.getCategoryNewsUrl;

  constructor(private http: HttpClient) { }

  getNews(value: string): Observable<News[]>{
    return this.http.get<News[]>(`${this.url}/${value}`);
  }
}

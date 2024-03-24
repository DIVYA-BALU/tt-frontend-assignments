import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/News';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DailyNewsService {

  url: string = environment.dailyNewsUrl;
  newsApiUrl: string = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a0f407708ef34ba8915ba07d5cd68ecb";

  constructor(private http: HttpClient) { }

  getDailyNews(): Observable<News[]>{
    return this.http.get<News[]>(this.url);
  }

  getDailyNewsApi(): Observable<any>{
    return this.http.get<any>(this.newsApiUrl);
  }
}

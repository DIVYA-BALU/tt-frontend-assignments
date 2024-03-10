import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/News';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DisplayNewsService {
  
  newsUrl: string = environment.getNewsByIdUrl;
  viewsUrl: string = environment.increaseNewsUrl;

  constructor(private http: HttpClient) { }

  increaseViews(newsId: string): void {
    this.http.post(`${this.viewsUrl}/${newsId}`, {}).subscribe();
  }

  getNews(newsId: string): Observable<News> {
    return this.http.get<News>(`${this.newsUrl}/${newsId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/Article';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DisplayArticleService {

  url: string = environment.getArticle;
  increaseViewsUrl: string = environment.increaseArticleViews;
  saveArticleUrl: string = environment.saveArticleUrl;
  unsaveArticleUrl: string = environment.unsaveArticleUrl;

  constructor(private http: HttpClient) { }

  getArticle(articleId: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${articleId}`);
  }

  increaseViews(articleId: string): void{
    this.http.post(`${this.increaseViewsUrl}/${articleId}`, {}).subscribe();
  }

  saveArtcile(id: string): Observable<string>{
    return this.http.post(`${this.saveArticleUrl}/${id}`, {}, {responseType: 'text'});
  }

  unsaveArticle(id: string): Observable<string>{
    return this.http.delete(`${this.unsaveArticleUrl}/${id}`, {responseType: 'text'});
  }
}

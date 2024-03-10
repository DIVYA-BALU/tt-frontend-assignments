import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/Article';
import { Page } from 'src/app/model/Page';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RejectedArticleService {

  url: string = environment.getRejectedArticleUrl;

  constructor(private http: HttpClient){}

  getRejectedArticle(pageIndex: number, pageSize: number): Observable<Page<Article>> {

    const param = new HttpParams()
    .set('pageIndex', pageIndex)
    .set('pageSize', pageSize);
    
    return this.http.get<Page<Article>>(this.url, { params : param});
  }
}

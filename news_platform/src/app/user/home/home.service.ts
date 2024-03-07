import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/Article';
import { Page } from 'src/app/model/Page';
import { ShortReads } from 'src/app/model/ShortReads';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  shortReadsUrl: string = environment.getShortReadsUrl;
  articleUrl: string = environment.getArticleUrl;

  constructor(private http: HttpClient) { }

  getShortReads(pageIndex: number, pageSize: number): Observable<Page<ShortReads>>{
    const param = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<Page<ShortReads>>(this.shortReadsUrl, { params: param});
  }

  getArticle(pageIndex: number, pageSize: number): Observable<Page<Article>>{
    const param = new HttpParams()
    .set('pageIndex', pageIndex.toString())
    .set('pageSize', pageSize.toString());
    return this.http.get<Page<Article>>(this.articleUrl, { params: param});
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/Article';
import { News } from 'src/app/model/News';
import { Page } from 'src/app/model/Page';
import { ShortReads } from 'src/app/model/ShortReads';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  shortReadsUrl: string = environment.getShortReadsUrl;
  articleUrl: string = environment.getArticleUrl;
  topNewsUrl: string = environment.getTopNewsUrl;
  getAllNewsUrl: string = environment.getAllNewsUrl;

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

  getTopNews(): Observable<News[]>{
    return this.http.get<News[]>(this.topNewsUrl);
  }

  getAllNews() {
    return this.http.get<News[]>(this.getAllNewsUrl);
  }
}

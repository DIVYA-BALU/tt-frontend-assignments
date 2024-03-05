import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/Article';
import { Page } from 'src/app/model/Page';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  url: string = environment.getPendingArticleUrl;
  acceptUrl: string = environment.articleAcceptUrl;
  rejectUrl: string = environment.articleRejectUrl;

  constructor(private http: HttpClient) { }

  getPendingArticle(pageIndex: number, pageSize: number): Observable<Page<Article>> {

    const param = new HttpParams()
    .set('pageIndex', pageIndex)
    .set('pageSize', pageSize);
    
    return this.http.get<Page<Article>>(this.url, { params : param})
  }

  onAccept(id: string): Observable<string>{
    return this.http.put(`${this.acceptUrl}/${id}`,{}, { responseType: 'text' });
  }

  onReject(id: string, reason: string): Observable<string>{

    const param = new HttpParams()
    .set('reason', reason);
    
    return this.http.put(`${this.rejectUrl}/${id}`, {}, {params: param, responseType: 'text'});
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsDTO } from 'src/app/model/News';
import { Page } from 'src/app/model/Page';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = environment.getPendingNewsUrl;
  acceptUrl: string = environment.newsAcceptUrl;
  rejectUrl: string = environment.newsRejectUrl;

  constructor(private http: HttpClient) { }

  getPendingNews(pageIndex: number, pageSize: number): Observable<Page<NewsDTO>> {

    const param = new HttpParams()
    .set('pageIndex', pageIndex)
    .set('pageSize', pageSize);
    
    return this.http.get<Page<NewsDTO>>(this.url, { params : param})
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

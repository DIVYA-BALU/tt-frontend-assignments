import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsDTO } from 'src/app/model/News';
import { Page } from 'src/app/model/Page';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RejectNewsService {

  rejectedNews: string = environment.getRejectedNewsUrl;

  constructor(private http: HttpClient) { }

  getRejectedNews(pageIndex: number, pageSize: number): Observable<Page<NewsDTO>>{

    const param = new HttpParams()
    .set('pageIndex', pageIndex)
    .set('pageSize', pageSize);

    return this.http.get<Page<NewsDTO>>(this.rejectedNews, { params : param});
  }
}

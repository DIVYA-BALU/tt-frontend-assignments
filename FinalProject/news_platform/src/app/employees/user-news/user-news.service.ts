import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/Page';
import { UserNews } from 'src/app/model/UserNews';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserNewsService {
  
  url: string = environment.getUserNewsAcceptedUrl;

  constructor(private http: HttpClient) { }

  getUserNews(pageIndex: number, pageSize: number): Observable<Page<UserNews>> {

    console.log("came");
    
    const param = new HttpParams()
    .set('pageIndex', pageIndex)
    .set('pageSize', pageSize);
    
    return this.http.get<Page<UserNews>>(this.url, { params : param});
  }

}

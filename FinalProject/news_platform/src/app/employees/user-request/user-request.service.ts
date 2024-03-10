import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/Page';
import { UserNews } from 'src/app/model/UserNews';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService {
  getUserNewsUrl: string = environment.getUserNewsUrl;
  acceptUrl: string = environment.userNewsAcceptUrl;
  rejectUrl: string = environment.userNewsRejectUrl;

  constructor(private http: HttpClient) {}

  getUserNews(pageIndex: number, pageSize: number): Observable<Page<UserNews>> {
    const param = new HttpParams()
      .set('pageIndex', pageIndex)
      .set('pageSize', pageSize);
    return this.http.get<Page<UserNews>>(this.getUserNewsUrl, { params: param });
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

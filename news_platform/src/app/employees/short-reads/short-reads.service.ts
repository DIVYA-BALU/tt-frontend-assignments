import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/Page';
import { ShortReads } from 'src/app/model/ShortReads';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ShortReadsService {

  url: string = environment.getPendingShortReadsUrl;
  acceptUrl: string = environment.shortReadsAcceptUrl;
  rejectUrl: string = environment.shortReadsRejectUrl;

  constructor(private http: HttpClient) { }

  getPendingShortReads(pageIndex: number, pageSize: number): Observable<Page<ShortReads>> {

    const param = new HttpParams()
    .set('pageIndex', pageIndex)
    .set('pageSize', pageSize);
    
    return this.http.get<Page<ShortReads>>(this.url, { params : param})
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

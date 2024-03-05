import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/Page';
import { ShortReads } from 'src/app/model/ShortReads';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RejectedShortReadsService {
  url: string = environment.getRejectedShortReadsUrl;

  constructor(private http: HttpClient){}

  getRejectedShortReads(pageIndex: number, pageSize: number): Observable<Page<ShortReads>> {

    const param = new HttpParams()
    .set('pageIndex', pageIndex)
    .set('pageSize', pageSize);
    
    return this.http.get<Page<ShortReads>>(this.url, { params : param});
  }
}

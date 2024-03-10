import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Explainers } from 'src/app/model/Explainers';
import { Page } from 'src/app/model/Page';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExplainersService {

  url: string = environment.getPendingExplainersUrl;
  acceptUrl: string = environment.explainersAcceptUrl;
  rejectUrl: string = environment.explainersRejectUrl;

  constructor(private http: HttpClient) { }

  getPendingExplainers(pageIndex: number, pageSize: number): Observable<Page<Explainers>> {

    const param = new HttpParams()
    .set('pageIndex', pageIndex)
    .set('pageSize', pageSize);
    
    return this.http.get<Page<Explainers>>(this.url, { params : param})
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

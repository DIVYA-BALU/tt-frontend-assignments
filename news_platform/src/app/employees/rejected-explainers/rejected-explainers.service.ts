import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Explainers } from 'src/app/model/Explainers';
import { Page } from 'src/app/model/Page';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RejectedExplainersService {

  url: string = environment.getRejectedExplainersUrl;

  constructor(private http: HttpClient){}

  getRejectedExplainers(pageIndex: number, pageSize: number): Observable<Page<Explainers>> {

    const param = new HttpParams()
    .set('pageIndex', pageIndex)
    .set('pageSize', pageSize);
    
    return this.http.get<Page<Explainers>>(this.url, { params : param});
  }
}

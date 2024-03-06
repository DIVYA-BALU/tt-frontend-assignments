import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funder } from '../model/funder';
import { Page } from '../model/page';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FundersService {

  funderUrl = environment.funderBaseUrl;

  constructor(private http: HttpClient) {}

  getAllFunders(pageIndex: number, pageSize: number): Observable<Page<Funder>> {
    
    const param = new HttpParams()
    .set('pageNo',pageIndex)
    .set('PageSize',pageSize);
    
    return this.http.get<Page<Funder>>(`${this.funderUrl}/findall`);
  }

 
}

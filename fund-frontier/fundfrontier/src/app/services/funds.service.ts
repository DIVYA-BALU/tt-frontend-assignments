import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Funds } from '../model/funds';
import { Page } from '../model/page';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  fundUrl = environment.fundsBaseUrl
  constructor(private http: HttpClient) { }

  getAllFunds(pageIndex: number, pageSize: number): Observable<Page<Funds>> {
    const param = new HttpParams()
      .set('pageIndex', pageIndex)
      .set('pageSize', pageSize);
    return this.http.get<Page<Funds>>(`${this.fundUrl}/getall`, { params: param });
  }

  saveFund(funds: Funds): Observable<Funds> {
    return this.http.post<Funds>(`${this.fundUrl}/save`, funds);
  }

  getStudentsByFunder(email: string): Observable<Funds[]> {
    return this.http.get<Funds[]>(`${this.fundUrl}/findFunder/${email}`);
  }

}

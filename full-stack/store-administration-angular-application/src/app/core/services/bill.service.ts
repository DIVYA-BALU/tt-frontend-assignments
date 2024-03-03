import { Injectable } from '@angular/core';
import { Bill, Revenue } from '../models/API.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) {

  }

  saveBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}`, bill);
  }

  getRevenue(): Observable<Revenue> {
    return this.http.get<Revenue>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}/revenue`);
  }
}

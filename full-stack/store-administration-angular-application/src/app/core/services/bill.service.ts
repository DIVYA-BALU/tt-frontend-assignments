import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants/Constants';
import { Bill, IncomeStatement, PaginatedResponse, Revenue } from '../models/API.model';

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

  getSectionWiseAnalysis(): Observable<PaginatedResponse<IncomeStatement>> {
    return this.http.get<PaginatedResponse<IncomeStatement>>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}/sectionWiseAnalysis`);
  }

  getBranchWiseAnalysis(): Observable<PaginatedResponse<IncomeStatement>> {
    return this.http.get<PaginatedResponse<IncomeStatement>>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}/branchWiseAnalysis`);
  }

  getSectionWiseAnalysisForBranch(): Observable<PaginatedResponse<IncomeStatement>> {
    return this.http.get<PaginatedResponse<IncomeStatement>>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}/sectionWiseAnalysisForBranch`);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants/Constants';
import { Bill, IncomeStatement, PaginatedResponse, Revenue } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  public billSubject: BehaviorSubject<Bill> = new BehaviorSubject<Bill>(new Bill([], 0, '', ''));
  public billSubject$: Observable<Bill> = this.billSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  setBillSubject(bill: Bill) {
    this.billSubject.next(bill);
  }

  saveBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}`, bill);
  }

  getRevenue(): Observable<Revenue> {
    return this.http.get<Revenue>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}/revenue`);
  }

  getSectionWiseAnalysis(page: number = 0, size: number = 10): Observable<PaginatedResponse<IncomeStatement>> {
    const params = new HttpParams()
      .set('pageNo', page.toString())
      .set('pageSize', size.toString());
    return this.http.get<PaginatedResponse<IncomeStatement>>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}/sectionWiseAnalysis`, { params: params });
  }

  getBranchWiseAnalysis(page: number = 0, size: number = 10): Observable<PaginatedResponse<IncomeStatement>> {
    const params = new HttpParams()
      .set('pageNo', page.toString())
      .set('pageSize', size.toString());
    return this.http.get<PaginatedResponse<IncomeStatement>>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}/branchWiseAnalysis`, { params: params });
  }

  getSectionWiseAnalysisForBranch(page: number, size: number, branchId: string): Observable<PaginatedResponse<IncomeStatement>> {
    const params = new HttpParams()
      .set('branchId', branchId)
      .set('pageNo', page.toString())
      .set('pageSize', size.toString());
    return this.http.get<PaginatedResponse<IncomeStatement>>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}/sectionWiseAnalysisForBranch`, { params: params });
  }

  getDateWiseAnalysisForSection(page: number, size: number, branchId: string, sectionId: string): Observable<PaginatedResponse<IncomeStatement>> {
    const params = new HttpParams()
      .set('branchId', branchId)
      .set('sectionId', sectionId)
      .set('pageNo', page.toString())
      .set('pageSize', size.toString());
    return this.http.get<PaginatedResponse<IncomeStatement>>(`${environment.API_URL}${Constants.API_END_POINT.BILLS}/dateWiseAnalysisForBranch`, { params: params });
  }
}

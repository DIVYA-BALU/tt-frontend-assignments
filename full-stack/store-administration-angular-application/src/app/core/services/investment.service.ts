import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Investment } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private totalInvestment: BehaviorSubject<Investment> = new BehaviorSubject<Investment>({ _id: '', amount: 0, description: '' });
  public totalInvestment$: Observable<Investment> = this.totalInvestment.asObservable();
  constructor(private http: HttpClient) { }

  saveInvestment(investment: Investment): Observable<Investment> {
    console.log(investment);
    
    return this.http.post<Investment>(
      `${environment.API_URL}${Constants.API_END_POINT.INVESTMENTS}`,
      investment
    );
  }

  getTotalInvestment(): Observable<Investment> {
    return this.http.get<Investment>(`${environment.API_URL}${Constants.API_END_POINT.INVESTMENTS}/total`);
  }

  setTotalInvestmentSubject() {
    this.getTotalInvestment().subscribe({
      next: (totalInvestment) => this.totalInvestment.next(totalInvestment),
      error: (error: HttpErrorResponse) => {
        if (error.status === 404)
          alert('Unable to connect to the server');
        else
          alert(`${error.status} found`);
      }
    })
  }
}

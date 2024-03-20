import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { HttpClient } from '@angular/common/http';
import { Investment } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private totalInvestment: BehaviorSubject<Investment> = new BehaviorSubject<Investment>({ _id: '', amount: 0, description: '' });
  public totalInvestment$: Observable<Investment> = this.totalInvestment.asObservable();
  private totalInvestmentSubscription: Subscription = new Subscription;

  constructor(private http: HttpClient) { }

  saveInvestment(investment: Investment): Observable<Investment> {
    return this.http.post<Investment>(
      `${environment.API_URL}${Constants.API_END_POINT.INVESTMENTS}`,
      investment
    );
  }

  getTotalInvestment(): Observable<Investment> {
    return this.http.get<Investment>(`${environment.API_URL}${Constants.API_END_POINT.INVESTMENTS}/total`);
  }

  setTotalInvestmentSubject() {
    this.totalInvestmentSubscription = this.getTotalInvestment().subscribe({
      next: (totalInvestment) => {
        this.totalInvestment.next(totalInvestment);
      }
    });
  }

  unSubscribeAll() {
    if (this.totalInvestmentSubscription) {
      this.totalInvestmentSubscription.unsubscribe();
    }
  }

}

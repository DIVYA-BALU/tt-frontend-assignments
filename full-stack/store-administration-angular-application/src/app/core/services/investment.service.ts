import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Investment } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http: HttpClient) { }

  saveInvestment(investment: Investment): Observable<Investment> {
    return this.http.post<Investment>(
      `${environment.API_URL}${Constants.API_END_POINT.INVESTMENTS}`,
      investment
    );
  }

  getTotalInvestment(): Observable<Investment> {
    return this.http.get<Investment>(`${environment.API_URL}${Constants.API_END_POINT.INVESTMENTS}/total`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    );
  }
}

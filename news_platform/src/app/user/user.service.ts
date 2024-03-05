import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CNY&apikey=6ZMU5089597S4U6W";

  constructor(private http: HttpClient) { }

  getStocks(): Observable<any>{
    return this.http.get(this.url);
  }
}

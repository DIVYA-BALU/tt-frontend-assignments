import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPageService {

  url: string = environment.createTransactionUrl;
  getUrl: string = environment.getTransactionUrl;

  constructor(private http: HttpClient){}

  createTransaction(id: string): Observable<any>{
    return this.http.post(`${this.url}/${id}`, {});
  }

  getTransaction(): Observable<any> {
    return this.http.get<any>(this.getUrl);
  }
}

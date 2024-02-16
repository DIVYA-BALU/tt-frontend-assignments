import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddTransactionService {

  constructor(private http: HttpClient) { }

  private addTransactionUrl = '';
  private userName = localStorage.getItem('userName');

  addTransaction(body : any){
    this.addTransactionUrl = `${environment.addTransactionUrl}`;
    return this.http.post<any>(`${this.addTransactionUrl}/${this.userName}`,body, { observe : 'response'});
  }

}

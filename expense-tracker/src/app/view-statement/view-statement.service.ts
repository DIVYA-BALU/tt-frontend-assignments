import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ViewStatementService {

  userName: any = '';
  accountNumber: any = '';

  constructor(private http: HttpClient) { }

  getDetails() {

    this.userName = localStorage.getItem('userName');
    this.accountNumber = localStorage.getItem('accountNumber');

    const baseUrl = `${environment.getAccountDetailsUrl}/${this.accountNumber}/${this.userName}`;

     console.log(this.http.get<any>(baseUrl));

    return this.http.get<any>(baseUrl);
  }

  // getTotalIncome() {

  //   this.userName = localStorage.getItem('userName');

  //   console.log(this.userName);
    
  //   const baseUrl = `http://localhost:8080/income/listtotalincome/${this.userName}`;

  //    console.log(this.http.get<any>(baseUrl));
    
  //    return this.http.get<any>(baseUrl);
  // }

  // getTotalExpense() {

  //   this.userName = localStorage.getItem('userName');

  //   console.log(this.userName);
    
  //   const baseUrl = `http://localhost:8080/expense/listtotalexpense/${this.userName}`;

  //    console.log(this.http.get<any>(baseUrl));
    
  //    return this.http.get<any>(baseUrl);
  // }

  getTotalTransaction() {
    this.userName = localStorage.getItem('userName');
    const baseUrl = `${environment.getTransactionStatementUrl}/${this.userName}`;
    return this.http.get<any>(baseUrl);
  }
}

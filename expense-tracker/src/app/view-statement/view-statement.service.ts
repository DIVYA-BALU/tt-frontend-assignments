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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };

    this.userName = localStorage.getItem('userName');
    this.accountNumber = localStorage.getItem('accountNumber');

    const baseUrl = `${environment.getAccountDetailsUrl}/${this.accountNumber}/${this.userName}`;

     console.log(this.http.get<any>(baseUrl, httpOptions));

    return this.http.get<any>(baseUrl, httpOptions);
  }

  getTotalIncome() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };

    this.userName = localStorage.getItem('userName');

    console.log(this.userName);
    
    const baseUrl = `http://localhost:8080/income/listtotalincome/${this.userName}`;

     console.log(this.http.get<any>(baseUrl, httpOptions));
    
     return this.http.get<any>(baseUrl, httpOptions);
  }

  getTotalExpense() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };

    this.userName = localStorage.getItem('userName');

    console.log(this.userName);
    
    const baseUrl = `http://localhost:8080/expense/listtotalexpense/${this.userName}`;

     console.log(this.http.get<any>(baseUrl, httpOptions));
    
     return this.http.get<any>(baseUrl, httpOptions);
  }

  getTotalTransaction() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };

    this.userName = localStorage.getItem('userName');

    console.log(this.userName);
    
    const baseUrl = `/${this.userName}`;

     console.log(this.http.get<any>(baseUrl, httpOptions));
    
     return this.http.get<any>(baseUrl, httpOptions);
  }
}

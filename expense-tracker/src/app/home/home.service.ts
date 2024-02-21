import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  userName: any = '';
  accountNumber: any = '';



  constructor(private http: HttpClient) { }

  getDetails() {

    this.userName = localStorage.getItem('userName');
    this.accountNumber = localStorage.getItem('accountNumber');
    const baseUrl = `${environment.getAccountDetailsUrl}/${this.accountNumber}/${this.userName}`;
    return this.http.get<any>(baseUrl);
  }
}

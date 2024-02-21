import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private baseUrl: string = "http://localhost:8080/account/listall";


  constructor(private http: HttpClient) { }

  userDetails(token: string){
    return this.http.get<any>(this.baseUrl);
  }
}

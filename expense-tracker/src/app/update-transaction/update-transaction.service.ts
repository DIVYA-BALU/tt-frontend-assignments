import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpdateTransactionService {

  constructor(private http : HttpClient) { }

  updateTransaction(data : any){
    return this.http.put<any>(`${environment.updateTransactionUrl}`, data, { observe : 'response'});
  }
}

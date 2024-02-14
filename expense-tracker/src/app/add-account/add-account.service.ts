import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddAccountService {

  constructor(private http: HttpClient) { }

  addAccountUrl : any = '';

  addAccount(accountNumber : string, accountHolderName: string, bankName : string, accountType : string) {

    const body = {
      accountNumber,
      accountHolderName,
      bankName,
      accountType
    }

    console.log(body);
    
    this.addAccountUrl = `${environment.addAccountUrl}`;
    
    return this.http.post<any>(this.addAccountUrl, body, {observe : 'response'});
  }
}

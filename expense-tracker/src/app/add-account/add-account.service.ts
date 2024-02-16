import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddAccountService {

  constructor(private http: HttpClient) { }

  addAccountUrl : any = '';

  addAccount(addAccount : object) {

    console.log(addAccount);
    
    this.addAccountUrl = `${environment.addAccountUrl}`;
    
    return this.http.post<any>(this.addAccountUrl, addAccount, {observe : 'response'});
  }
}

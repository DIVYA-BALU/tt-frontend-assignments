import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private registerUrl : string = '';
  token : any = '';

  constructor(private http: HttpClient) {
    this.registerUrl = `${environment.registerUrl}`
  }

  registerUser(body : object){
    this.token = this.http.post<any>(this.registerUrl, body, { observe : 'response'});
    console.log(this.token);
    return this.token;
    
  }
}

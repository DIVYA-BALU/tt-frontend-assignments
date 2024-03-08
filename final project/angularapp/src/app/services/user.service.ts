import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/user";

  constructor(private httpClient: HttpClient) { }

  public createTransaction(amount: number) {
    return this.httpClient.get("http://localhost:8080/pay/createTransaction/" + amount);
  }

  loginUser(loginForm: FormGroup): Observable<any> {
    let url = `${this.baseUrl}/login`;
    return this.httpClient.post(url, loginForm.value);
  }

  signUpUser(signupForm: FormGroup): Observable<any> {
    let url = `${this.baseUrl}/signup`;
    return this.httpClient.post(url, signupForm.value);
  }

  forgotPassUser(forgotpasswordForm:FormGroup):Observable<any>{
    let url = `${this.baseUrl}/passUpdate`;
    return this.httpClient.put(url, forgotpasswordForm.value);
  }

  updateUserLocation(id:string, location:string):Observable<any>{
    let url = `${this.baseUrl}/locationUpdate/${id}/${location}`;
    return this.httpClient.put(url,null);
  }

}

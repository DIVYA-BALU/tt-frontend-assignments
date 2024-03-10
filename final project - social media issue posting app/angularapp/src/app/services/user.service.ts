import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/user";
  private authUrl = "http://localhost:8080/api/auth";

  constructor(private httpClient: HttpClient) { }

  public createTransaction(amount: number) {
    return this.httpClient.get("http://localhost:8080/pay/createTransaction/" + amount);
  }

  signUpUser(signupForm: FormGroup): Observable<any> {
    const url = `${this.authUrl}/register`;
    return this.httpClient.post(url, signupForm.value);
  }

  loginUser(loginForm: FormGroup): Observable<any> {
    const url = `${this.authUrl}/login`;
    return this.httpClient.post(url, loginForm.value);
  }

  forgotPassUser(forgotpasswordForm: FormGroup): Observable<any>{
    const url = `${this.authUrl}/passUpdate`;
    return this.httpClient.put(url, forgotpasswordForm.value);
  }

  updateUserLocation(id: string, location: string):Observable<any>{
    const url = `${this.baseUrl}/locationUpdate/${id}/${location}`;
    return this.httpClient.put(url,null);
  }

}

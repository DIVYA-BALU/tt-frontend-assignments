import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../model/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl =  environment.loginUrl;
  isLoggedin:boolean = false;

  constructor(private http:HttpClient) { }

  login(email:string, password:string) : Observable<LoginResponse> {
    const body = {email,password}    
    return this.http.post<LoginResponse>(this.loginUrl,body);
  }

  loggedin(status:boolean, token:string): void {

    if(status) {
    this.isLoggedin = true;
    localStorage.setItem("isloggedin","true")
    localStorage.setItem("accessToken", token)
    }else {
      this.isLoggedin = false;
      localStorage.setItem('isLoggedin', 'false');
    }

  }

  isAuthenticated():boolean {
    return localStorage.getItem("accessToken") === "true";
  }
  
  logout() {
    this.isLoggedin = false;
    localStorage.clear();
  }
}

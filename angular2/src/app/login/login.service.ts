import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})

export class LoginService {
 
  private baseUrl: string = "http://localhost:8080/api/auth/login";

  isLogin : boolean = false;
 
  constructor(private http: HttpClient) { }
 
  authenticate(userName: string, password: string): Observable<any> {
    const body = { userName, password }
    return this.http.post<any>(this.baseUrl, body);
  }

  login(userName: string, password: string) : boolean{
    if(userName === 'userName' && password === 'password'){
      this.isLogin = true;
      localStorage.setItem('isLogin','valid');
      return true;
    }
    else{
      this.isLogin = false;
      localStorage.setItem('isLogin','notValid');
      return false;
    }
  }

  isAuthenticated() : boolean{
    return this.isLogin;
  }
 
}
 
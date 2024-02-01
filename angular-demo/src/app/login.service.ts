import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  loginUser(name:string, password:string): Observable<any> {
    const body = {name,password}
    console.log(body);
    const tk:any = this.http.post<any>(this.baseUrl,body);
    console.log("tk",tk);
    
    return tk;
  }
}

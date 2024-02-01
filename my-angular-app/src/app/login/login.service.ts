import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = "http://localhost:8080/api/auth/authenticate";

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<any> {
    const body = { email, password }
    console.log(body);
    const tk: any = this.http.post<any>(this.baseUrl, body);
    return tk;
  }

}

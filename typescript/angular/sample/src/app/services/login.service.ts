import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private apiUrl = 'http://localhost:8080/api/auth/authenticate';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    const body = { email, password };
    console.log('body:', body);
    
    return this.http.post<LoginResponse>(this.apiUrl, body);
  }
}

interface LoginResponse {
  token: string;
}


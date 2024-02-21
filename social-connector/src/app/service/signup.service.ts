import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private baseUrl: string = environment.baseUrl;
  isLoggedIn: boolean;
  constructor(private http: HttpClient, private router: Router,private loginService:LoginService) {
    this.isLoggedIn = localStorage.getItem('logged_in') === 'true';
  }

  signUpUser(name: string, email: string, password: string): Observable<any> {
    console.log(this.isLoggedIn);
    const body = { name, email, password };
    console.log(body);
    const token: Observable<any> = this.http.post<any>(
      `${this.baseUrl}/api/auth/register`,
      body,
      { observe: 'response' }
    );
    // console.log(token.status);
    // console.log(token.body);
    // console.log(token.ok);

    console.log('token', token);
    localStorage.setItem('logged_in', 'true');
    this.isLoggedIn = true;
    return token;
  }

  sigUp(token: string): boolean {
    this.isLoggedIn = true;
    this.loginService.isLoggedIn = true;
    localStorage.setItem('token', token);
    return true;
  }
}

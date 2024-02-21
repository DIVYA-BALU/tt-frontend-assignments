import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { pageResponse } from '../models/pageResponse';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  // private sharedUser = new BehaviorSubject<pageResponse>();
  
  private userIdSubject = new BehaviorSubject<string>('');
  sharedUserId$ = this.userIdSubject.asObservable();
  permission = new BehaviorSubject<any>([]);
  private baseUrl: string = environment.baseUrl;
  isLoggedIn: boolean = localStorage.getItem('logged_in') === 'true';
  constructor(private http: HttpClient, private router: Router) {
    this.permission.next(JSON.parse(localStorage.getItem("permission") || "[]"));
    // this.isLoggedIn = false;
    // console.log(this.isLoggedIn);
    // localStorage.clear();
  }

  loginUser(name: string, password: string): Observable<any> {
    console.log(this.isLoggedIn);
    const body = { name, password };
    console.log(body);
    const token: Observable<any> = this.http.post<any>(
      `${this.baseUrl}/api/auth`,
      body,
      { observe: 'response' }
    );
    // console.log(token.status);
    // console.log(token.body);
    // console.log(token.ok);

    console.log('token', token);
    return token;
  }

  login(token: string): boolean {
    this.isLoggedIn = true;
    localStorage.setItem('token', token);
    return true;
  }

  isAuthenticated(): boolean {
    console.log(this.isLoggedIn);

    return this.isLoggedIn;
  }

  setUserId(token: string) {
    const tokenInfo: any = jwtDecode(token);
    const role: String = tokenInfo.role[0].authority;
    console.log(tokenInfo.id);
    this.userIdSubject.next(tokenInfo.id);
    return tokenInfo.id;
  }

  setPermissions(id:string){
    const token: Observable<any> = this.http.get<any>(
      `${this.baseUrl}/api/auth/permission?id=${id}`
    );
    token.subscribe({next:(val) => {
      console.log(val);
      
    }})
  }
}

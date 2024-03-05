import { Injectable } from '@angular/core';
import {
  LoginDetails,
  Otp,
  StatusMessage,
  Token,
  User,
} from '../models/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private baseUrl: string = environment.baseUrl;

  isLoggedIn: boolean = false;

  private idSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  sharedId$: Observable<string> = this.idSubject.asObservable();

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sharedIsLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  private role: string = 'ANONYMOUS';

  constructor(private http: HttpClient) {
    this.isLoggedIn =
      localStorage.getItem('loggedIn') === 'true' ? true : false;

    if (this.isLoggedIn === true) {
      const token: any = jwtDecode(localStorage.getItem('token') || '');
      this.idSubject.next(token.id);
      this.role = token.role[0].authority;
      this.loggedInSubject.next(true)
    }
  }

  login(loginDetails: LoginDetails) {
    return this.http.post<Token>(`${this.baseUrl}auth`, loginDetails);
  }

  registerUser(user: User): Observable<Token> {
    return this.http.post<any>(`${this.baseUrl}auth/register`, user);
  }

  verifyEmail(email: string): Observable<StatusMessage> {
    const status: Observable<StatusMessage> = this.http.post<any>(
      `${this.baseUrl}email-verification`,
      { email }
    );
    return status;
  }

  verifyOtp(otp: Otp): Observable<StatusMessage> {
    const status: Observable<StatusMessage> = this.http.post<any>(
      `${this.baseUrl}email-verification/verify`,
      otp
    );
    return status;
  }

  registerOrganization(formData: FormData): Observable<StatusMessage> {
    return this.http.post<any>(`${this.baseUrl}organization`, formData);
  }

  registerVeterinaryDoctor(formData: FormData) {
    return this.http.post<any>(`${this.baseUrl}veterinary-doctor`, formData);
  }

  setLogin(id: string) {
    this.isLoggedIn = true;
    localStorage.setItem('loggedIn', 'true');
    this.idSubject.next(id);
    this.loggedInSubject.next(true)
  }

  setRole(role: string) {
    this.role = role;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  hasAccess(role: string) {
    console.log(role,this.role);
    
    if (this.role === role) {
      return true;
    }
    return false;
  }
  logout() {
    this.isLoggedIn = false;
    this.idSubject.next('');
    this.loggedInSubject.next(false)
    this.role = 'ANONYMOUS'
  }
}

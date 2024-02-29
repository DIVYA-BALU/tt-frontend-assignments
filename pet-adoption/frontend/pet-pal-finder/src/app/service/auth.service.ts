import { Injectable } from '@angular/core';
import {
  EmailVerificationRequest,
  LoginDetails,
  Otp,
  StatusMessage,
  Token,
  User,
} from '../models/models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {
    this.isLoggedIn =
      localStorage.getItem('loggedIn') === 'true' ? true : false;
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

  setLogin() {
    this.isLoggedIn = true;
    localStorage.setItem("loggedIn","true")
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  
}

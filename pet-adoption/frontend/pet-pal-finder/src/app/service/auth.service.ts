import { Injectable } from '@angular/core';
import { EmailVerificationRequest, LoginDetails, Otp, StatusMessage, Token, User } from '../models/models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(loginDetails:LoginDetails) {}

  registerUser(user:User):Observable<Token> {
    return this.http.post<any>(
      `${this.baseUrl}auth/register`,user
    );
  }

  verifyEmail(email:string):Observable<StatusMessage>{
    console.log("email",email);
    
    const status: Observable<StatusMessage> = this.http.post<any>(
      `${this.baseUrl}email-verification`,{email}
    );
    return status
  }

  verifyOtp(otp:Otp):Observable<StatusMessage>{
    console.log("otp",otp);
    
    const status: Observable<StatusMessage> = this.http.post<any>(
      `${this.baseUrl}email-verification/verify`,otp
    );
    return status
  }
}

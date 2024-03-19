import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  EmailVerificationRequest,
  Otp,
  StatusMessage,
  User,
} from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class EmailVerificationService {
  private userSubject = new BehaviorSubject<User>({
    email: '',
    role: '',
    password: '',
  });
  sharedUser$ = this.userSubject.asObservable();
  private emailSubject = new BehaviorSubject<string>('');
  sharedEmail$ = this.emailSubject.asObservable();
  private roleSubject = new BehaviorSubject<string>('');
  sharedRole$ = this.roleSubject.asObservable();

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  verifyEmail(
    emailVerificationRequest: EmailVerificationRequest
  ): Observable<StatusMessage> {
    this.emailSubject.next(emailVerificationRequest.email);
    const status: Observable<StatusMessage> = this.http.post<any>(
      `${this.baseUrl}email-verification`,
      emailVerificationRequest
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
}

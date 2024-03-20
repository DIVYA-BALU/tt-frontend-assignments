import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { EnrollUserRequest, LoginRequest, LoginResponse, User } from '../models/API.model';
import { UserDetailsService } from './user-details.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;

  constructor(private http: HttpClient, private userDetailsService: UserDetailsService) {

    this.isLoggedIn = false;
    const loginResponseString = localStorage.getItem('loginResponse');

    if (loginResponseString !== null) {
      this.isLoggedIn = true;
      this.userDetailsService.setLoginResponseSubject(JSON.parse(loginResponseString));
    }

  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      `${environment.API_URL}${Constants.API_END_POINT.USER_LOGIN}`,
      loginRequest
    ).pipe(
      tap((loginResponse: LoginResponse) => {
        localStorage.setItem("loginResponse", JSON.stringify(loginResponse));
        this.userDetailsService.setLoginResponseSubject(loginResponse);
        this.isLoggedIn = true;
      })
    );

  }

  logout() {

    localStorage.removeItem("loginResponse");
    this.isLoggedIn = false;

  }

  enrollUser(enrollUserRequest: EnrollUserRequest): Observable<User> {
    return this.http.post<User>(`${environment.API_URL}${Constants.API_END_POINT.USERS}`, enrollUserRequest);
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }
}

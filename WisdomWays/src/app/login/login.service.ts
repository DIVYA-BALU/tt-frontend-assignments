import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ProfileService } from '../profile/profile.service';
import { user } from '../models/user';
import { loginResponse } from '../models/loginResponce';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.loginUrl;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private route: Router,
    private profileService: ProfileService
  ) {}

  login(loginUser: user): Observable<loginResponse> {
    return this.http.post<loginResponse>(this.url, loginUser);
  }

  getAuthority() {
    this.profileService.getUser().subscribe((data) => {
      data.authorities.some((role: any) => {
        if (role.authority === 'INSTRUCTOR') {
          localStorage.setItem('instructor', 'true');
          console.log(true);
          
        }
      });
    });
  }

  loggedIn(status: boolean, token: string): void {
    if (status) {
      localStorage.setItem('isLoggedIn', 'valid');
      localStorage.setItem('accessToken', token);
      // this.cookieService.set('isLoggedIn', 'valid');
      this.getAuthority();
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'valid';
    // return this.cookieService.get('isLoggedIn') === 'valid';
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'inValid');
    localStorage.removeItem('accessToken');
    localStorage.setItem('instructor', 'false');
    // this.cookieService.deleteAll('isLoggedIn');
  }
}

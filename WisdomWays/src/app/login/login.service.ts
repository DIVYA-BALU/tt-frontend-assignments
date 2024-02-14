import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.loginUrl;

  isLoggedIn: boolean = false;

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
      // console.log(data.authorities);
      data.authorities.some((role: any) => {
        if (role.authority === 'INSTRUCTOR') {
          localStorage.setItem('instructor', 'true');
        }
      });
    });
  }

  loggedIn(status: boolean, token: string): void {
    if (status) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'valid');
      localStorage.setItem('accessToken', token);
      this.cookieService.set('isLoggedIn', 'valid');
      this.getAuthority();
    } else {
      this.isLoggedIn = false;
      localStorage.setItem('isLoggedIn', 'inValid');
      this.cookieService.set('isLoggedIn', 'inValid');
    }
    // console.log(this.isLoggedIn);
  }

  isAuthenticated(): boolean {
    // return this.isLoggedIn;
    // return localStorage.getItem('isLoggedIn') === 'valid';
    return this.cookieService.get('isLoggedIn') === 'valid';
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    this.cookieService.deleteAll('isLoggedIn');
  }
}

interface loginResponse {
  accessToken: string;
}

interface user {
  email: string;
  password: string;
}

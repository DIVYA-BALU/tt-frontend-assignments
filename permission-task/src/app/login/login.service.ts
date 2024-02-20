import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { user } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginResponse } from '../models/loginResponse';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.loginUrl;

  constructor(private http: HttpClient, private route: Router, private profileService: ProfileService) {}

  login(loginUser: user): Observable<loginResponse> {
    return this.http.post<loginResponse>(this.url, loginUser);
  }

  getAuthority() {
    this.profileService.getUser().subscribe((data) => {
      localStorage.setItem('authorities', JSON.stringify(data.authorities));
    });
  }

  loggedIn(status: boolean, token: string): void {
    if (status) {
      localStorage.setItem('isLoggedIn', 'valid');
      localStorage.setItem('accessToken', token);
      this.getAuthority();
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'valid';
  }

  logout() {
    // localStorage.setItem('isLoggedIn', 'inValid');
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('authorities')
    // localStorage.removeItem('admin');
    localStorage.clear();
  }
}

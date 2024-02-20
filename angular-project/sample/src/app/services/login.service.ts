import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authUrl = 'http://localhost:8080/api/auth/authenticate';
  isLoggedin: boolean = false;

  role: string = '';

  userEmail = '';

  permissions = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
    if (localStorage.getItem('permissions') !== null) {
      this.permissions.next(localStorage.getItem('permissions') || '');
    }
  }

  login(email: string, password: string): Observable<loginResponse> {
    const loginInfo: Observable<loginResponse> = this.http.post<loginResponse>(
      this.authUrl,
      { email, password }
    );
    this.userEmail = email;
    return loginInfo;
  }

  findPermissions() {
    return this.permissions.asObservable();
  }

  getPermissions() {
    this.http
      .get(`http://localhost:8080/users/${this.userEmail}`)
      .subscribe((data: any) => {
        localStorage.setItem('role', data.role.role);
        localStorage.setItem(
          'permissions',
          data.authorities.map((a: any) => a.authority).join(',')
        );
        this.permissions.next(localStorage.getItem('permissions') || '');
      });
  }

  loggedin(status: boolean, token: string): void {
    if (status) {
      this.isLoggedin = true;
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('accessToken', token);
      this.getPermissions();
    } else {
      this.isLoggedin = false;
      localStorage.setItem('isLoggedin', 'false');
    }
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedin') === 'true';
  }

  logout() {
    this.isLoggedin = false;
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('accessToken');
  }
}
interface loginResponse {
  token: string;
}

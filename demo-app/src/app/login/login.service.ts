import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080/login";

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string): Observable<loginResponse> {
    const body = { email, password };
    return this.http.post<loginResponse>(this.url, body);
  }

  loggedIn(status: boolean): void {
    if (status) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'valid');
      this.cookieService.set('isLoggedIn', 'valid');

    } else {
      this.isLoggedIn = false;
      localStorage.setItem('isLoggedIn', 'inValid');
      this.cookieService.set('isLoggedIn', 'inValid');
    }
    console.log(this.isLoggedIn);
  }

  isAuthenticated(): boolean {
    // return this.isLoggedIn;
    // return localStorage.getItem('isLoggedIn') === 'valid';
    return this.cookieService.get('isLoggedIn') === 'valid';
  }

}
interface loginResponse {
  accessToken: string;
}

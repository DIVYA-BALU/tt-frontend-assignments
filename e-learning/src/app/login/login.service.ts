import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.loginUrl;

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService, private route: Router) { }

  login(loginUser: user): Observable<loginResponse> {
    return this.http.post<loginResponse>(this.url, loginUser);
  }

  loggedIn(status: boolean, token:string): void {
    if (status) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'valid');
      localStorage.setItem('accessToken', token);
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

  logout(){
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    this.cookieService.deleteAll('isLoggedIn');
    this.route.navigate(['/home']);
  }

}
interface loginResponse {
  accessToken: string;
}

interface user{
  email: string;
  password: string;
}

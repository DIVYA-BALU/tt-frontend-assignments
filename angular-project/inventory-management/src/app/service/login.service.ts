import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  authUrl = environment.authUrl;

  isLoggedin : boolean = false;


  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(email: string, password: string): Observable<loginResponse>{
    
    return this.http.post<loginResponse>(this.authUrl, {email, password});
  }


  loggedin(status: boolean, token : string): void {
    if (status) {
      this.isLoggedin = true;
      // localStorage.setItem('isLoggedin', 'true');
      // localStorage.setItem('accessToken', token);
       this.cookieService.set('isLoggedIn', 'true');
    } else {
      this.isLoggedin = false;
      // localStorage.setItem('isLoggedin', 'false');
       this.cookieService.set('isLoggedIn', 'false');
    }
  }
  isAuthenticated(): boolean {
    // return localStorage.getItem('isLoggedin') === 'true';
    return this.cookieService.get('isLoggedIn') === 'true';
  }

  logout(){
    this.isLoggedin = false;
    // localStorage.removeItem('isLoggedIn');
    // localStorage.removeItem('accessToken');
     this.cookieService.deleteAll('isLoggedIn');
  }

}

interface loginResponse {
  token: string;
}

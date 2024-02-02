import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/auth/authenticate';

  isLoggedin : boolean = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<loginResponse>{
    
    return this.http.post<loginResponse>(this.apiUrl, {email, password});
  }


  loggedin(status: boolean, token : string): void {
    if (status) {
      this.isLoggedin = true;
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('accessToken', token);
    } else {
      this.isLoggedin = false;
      localStorage.setItem('isLoggedin', 'false');
    }
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedin') === 'valid';
  }

  logout(){
    this.isLoggedin = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    //this.cookieService.deleteAll('isLoggedIn');
  }

}

interface loginResponse {
  token: string;
}

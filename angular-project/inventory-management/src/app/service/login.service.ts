import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  authUrl = environment.authUrl;

  isLoggedin : boolean = false;

  role : string = '';
  
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<loginResponse>{
    
    return this.http.post<loginResponse>(this.authUrl, {email, password}).pipe(
      tap(response => {
        const tokenParts = response.token.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        this.isLoggedin  = true;
        this.role = payload.roles[0];
      })
    );

  }


  loggedin(status: boolean, token : string): void {
    if (status) {
      this.isLoggedin = true;
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('accessToken', token);
      localStorage.setItem('role', this.role);
    } else {
      this.isLoggedin = false;
      localStorage.setItem('isLoggedin', 'false');

    }
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedin') === 'true';
  }

  logout(){
    this.isLoggedin = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
  }

}

interface loginResponse {
  token: string;
}



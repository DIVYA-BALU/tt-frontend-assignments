import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
export interface login {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})

export class LoginService {
  loggedStatus = false;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  authenticate(data: login): Observable<any> {

    const response: any = this.http.post<any>(environment.baseUrl + '/authenticate', data, { observe: 'response' });
    return response;
  }
  getUser() {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
    //   })
    // };

    if (sessionStorage.getItem('role') === 'PATIENT')
      return this.http.get<any>(
        environment.patUrl + `/getEmail/${sessionStorage.getItem('email')}`
      );
    else if (sessionStorage.getItem('role') === 'DOCTOR')
      return this.http.get<any>(
        environment.docUrl + `/getEmail/${sessionStorage.getItem('email')}`
      );
    else if (sessionStorage.getItem('role') === 'RECEPTIONIST')
      return this.http.get<any>(
        environment.recepUrl + `/getEmail/${sessionStorage.getItem('email')}`
      );
    else
      return this.http.get<any>(
        environment.userUrl + `/getEmail/${sessionStorage.getItem('email')}`
      );
  }

  isAuthencticate(): boolean {
    this.loggedStatus = this.cookieService.get('isLogged') === 'true';
    return this.loggedStatus;
  }
}

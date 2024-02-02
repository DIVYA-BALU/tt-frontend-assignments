import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedStatus: boolean = localStorage.getItem('isLogged') == 'true';
  constructor(private http: HttpClient) {

  }

  authenticate(email: string, password: string): Observable<any> {
    const body = { email, password }
    console.log(body);
    const tk: any = this.http.post<any>(environment.baseUrl, body, { observe: 'response' });
    return tk;
  }

  isAuthencticate(): boolean {
    return this.loggedStatus;
  }


}

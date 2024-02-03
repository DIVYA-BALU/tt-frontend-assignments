import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedStatus: boolean = false;
  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  authenticate(email: string, password: string): Observable<any> {
    const body = { email, password }
    console.log(body);
    const tk: any = this.http.post<any>(environment.baseUrl, body, { observe: 'response' });
    return tk;
  }

  isAuthencticate(): boolean {
    this.loggedStatus = (this.cookieService.get('isLogged') === 'true')
    return this.loggedStatus;
  }

}

import { Injectable } from '@angular/core';
import { signupDTO } from '../models/signUpDTO ';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { loginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url = environment.signupUrl;

  constructor(private http: HttpClient) { }

  signup(body: signupDTO): Observable<loginResponse>{
    return this.http.post<loginResponse>(this.url, body);
  }
}

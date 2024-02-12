import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

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

interface loginResponse {
  accessToken: string;
}

interface signupDTO {
  userId: string;
  email: string;
  password: string;
}

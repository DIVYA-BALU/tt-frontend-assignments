import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginDTO } from '../model/LoginDTO';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../model/ResponseDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.loginUrl;

  constructor(private http: HttpClient) { }

  login(loginForm: LoginDTO): Observable<ResponseDTO>{
    return this.http.post<ResponseDTO>(this.url, loginForm); 
  }
}

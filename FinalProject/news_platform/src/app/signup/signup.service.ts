import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupDTO } from '../model/SignupDTO';
import { ResponseDTO } from '../model/ResponseDTO';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url: string = environment.signupUrl;
  
  constructor(private http: HttpClient) { }

  signup(body: SignupDTO): Observable<ResponseDTO>{
    return this.http.post<ResponseDTO>(this.url, body);
  }

}

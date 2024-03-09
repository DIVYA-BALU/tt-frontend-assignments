import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Register } from '../model/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  regUrl = environment.registerUrl;
  constructor(private http: HttpClient) { }

  register(registerForm: Register): Observable<Register> {
    return this.http.post<Register>(this.regUrl, registerForm);
  }
  findUser(email: string) {
    return this.http.get<Register>(`http://localhost:8080/api/user/get/${email}`)
  }
}

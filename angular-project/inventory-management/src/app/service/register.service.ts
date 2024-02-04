import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  regUrl = environment.regUrl;

  constructor(private http :HttpClient) {}

  register(user: User): Observable<RegisterResponse>{
    //const body = {firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password, role: user.role.toUpperCase()};
    return this.http.post<RegisterResponse>(this.regUrl, user);
    
  }

}

interface RegisterResponse {
  token: string;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  regUrl = 'http://localhost:8080/api/auth/register';
  userUrl = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.regUrl, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + 'getall');
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl + 'updateuser', user);
  }
}

interface RegisterResponse {
  token: string;
}
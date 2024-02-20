import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = environment.getUsers;
  userurl: string = environment.getUserbyid;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

  getUserbyid(id: string): Observable<Users>{
    return this.http.get<Users>(`${this.userurl}/${id}`);
  }

  // addPermission(): Observable
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getUserUrl: string = environment.getUser;

  constructor(private http: HttpClient) { }

  getUser(): Observable<Users>{
    return this.http.get<Users>(this.getUserUrl);
  }
}

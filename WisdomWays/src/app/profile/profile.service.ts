import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getUserUrl = environment.getUserUrl;
  updateUserUrl = environment.updateUserUrl;
  deleteUserUrl = environment.deleteUserUrl;

  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    return this.http.get(this.getUserUrl);
  }

  updateUser(body: User): Observable<string>{
    return this.http.patch(this.updateUserUrl, body,  { responseType: 'text' });
  }

  deleteUser(): Observable<string>{
    return this.http.delete(this.deleteUserUrl, { responseType : 'text' });
  }

}

interface User {
  userId: string;
  firstName: string,
  lastName: string,
  bio: string,
  profession: string;
  organisation: string;
  email: string;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userUrl: string = environment.getUserUrl;
  updateUrl: string = environment.updateUserUrl;

  constructor(private http: HttpClient) {}

  getProfile(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  updateProfile(body: User): Observable<string> {
    return this.http.patch(this.updateUrl, body, { responseType: 'text' });
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Page } from '../model/page';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = environment.userBaseUrl;
  userFindUrl = environment.userUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(pageIndex: number, pageSize: number): Observable<Page<User>> {
    const param = new HttpParams()
      .set('pageIndex', pageIndex)
      .set('pageSize', pageSize);
    return this.http.get<Page<User>>(`${this.userUrl}/all`, { params: param })
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.userFindUrl}`);
  }

  updateProfile(profile: User): Observable<User> {
    return this.http.patch<User>(`${this.userUrl}/update`, profile)
  }

}

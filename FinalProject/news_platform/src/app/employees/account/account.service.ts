import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/Page';
import { User } from 'src/app/model/User';
import { UserDTO } from 'src/app/model/UserDTO';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  url: string = environment.getUsersUrl;
  createAccountUrl: string = environment.createUserUrl;

  constructor(private http: HttpClient) {}

  getAllUsers(pageIndex: number, pageSize: number): Observable<Page<User>> {
    const param = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Page<User>>(this.url, { params: param });
  }

  createAccount(body: UserDTO): Observable<string> {
    return this.http.post<string>(this.createAccountUrl, body);
  }
}

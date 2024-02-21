import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = environment.backendBaseUrl;
  constructor(private http: HttpClient) { }

  userInit(token:string){
    return this.http.get(`${this.url}/user/`);
  }
}

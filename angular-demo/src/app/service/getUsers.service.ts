import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  private baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  loginUser(token:string, password:string): Observable<any> {
    const tk:any = this.http.get<any>(this.baseUrl);
    console.log("tk",tk);
    
    return tk;
  }
}

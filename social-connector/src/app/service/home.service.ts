import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { postResponse } from '../models/postResponse';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) {
  }
  
  getFollowingPost(): Observable<postResponse[]> {
    const tk:Observable<postResponse[]> = this.http.get<any>(`${this.baseUrl}/post/following_post?id=${localStorage.getItem("id")}`);
    console.log("post",tk);
    return tk;
  }

}

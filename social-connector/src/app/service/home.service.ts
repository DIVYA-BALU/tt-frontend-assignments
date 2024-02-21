import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { postResponse } from '../models/postResponse';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  replaySubject = new ReplaySubject<any>(2,5000);
  replayData = this.replaySubject;
  getFollowingPost(): Observable<postResponse[]> {
    const post: Observable<postResponse[]> = this.http.get<any>(
      `${this.baseUrl}/post/following_post?id=${localStorage.getItem('id')}`
    );
    console.log('post', post);
    return post;
  }
}

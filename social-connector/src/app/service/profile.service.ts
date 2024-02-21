import { Injectable } from '@angular/core';
import { pageResponse } from '../models/pageResponse';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  sharedUser = new BehaviorSubject<pageResponse>({
    _id: '',
    name: '',
    page_handle: '',
    bio: '',
    dp: '',
    dob: new Date,
    page_privacy: '',
    post_count: '',
    follower_count: '',
    following_count: ''
  });

  getPageDetails(id: string) {
    const page: Observable<pageResponse> = this.http.get<any>(
      `${this.baseUrl}/page/get?id=${id}`
    );
    console.log('post', page);
    return page;
  }

  getPageBySimilarName(name:string){
    console.log(name);
    
    const page: Observable<pageResponse[]> = this.http.get<any>(
      `${this.baseUrl}/page/search?name=${name}`
    );
    console.log('post', page);
    return page;
  }

  setViewProfileDetailes(page:pageResponse){
    console.log("service", page);
    this.sharedUser.next(page);
    
  }
}

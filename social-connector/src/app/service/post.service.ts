import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pageResponse } from '../models/pageResponse';
import { postReport, postResponse, postUpload } from '../models/postResponse';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postId = new BehaviorSubject<string>('');
  postId$ = this.postId.asObservable();
  private postUrl = new BehaviorSubject<string>('');
  postUrl$ = this.postUrl.asObservable();

  private baseUrl: string = environment.baseUrl;

  page: pageResponse = {
    _id: localStorage.getItem('id') || '',
    name: '',
    page_handle: '',
    bio: '',
    dp: '',
    dob: new Date(),
    page_privacy: '',
    post_count: '',
    follower_count: '',
    following_count: '',
  };

  constructor(private http: HttpClient) {}

  setPostIdAndUrl(id: string, url: string) {
    this.postId.next(id);
    this.postUrl.next(url);
  }

  addLike(postId: string, type: string) {
    const like: Observable<any> = this.http.post<any>(
      `${this.baseUrl}/like/add`,
      { postOrCommentId: postId, type, likedId: this.page }
    );
    return like;
  }
  removeLike(postId: string, type: string) {
    const like: Observable<any> = this.http.delete<any>(
      `${this.baseUrl}/like/delete`,
      { body: { postOrCommentId: postId, type, likedId: this.page } }
    );
    return like;
  }

  getRecomendedPost(page: number) {
    const post: Observable<postResponse[]> = this.http.get<any>(
      `${this.baseUrl}/post/recommended_post?limit=${page}`
    );
    return post;
  }

  addNewPost(post: postUpload) {
    //why we use form data object instead of sending as JSON
    // If we try to send files directly as part of a JSON object (normal object),
    // it won't work because JSON does not support binary data natively.
    // When we use FormData to send files, it constructs a multipart/form-data request, which is the
    // appropriate format for handling file uploads. The multipart/form-data format allows binary data
    // (like files) to be included in the request body.
    const formData: FormData = new FormData();
    formData.append('pageId', post.pageId);
    formData.append('primary_poster', post.primary_poster);
    formData.append('caption', post.caption);
    formData.append('media', post.media);
    console.log(post, post.media);

    const newPost: Observable<any> = this.http.post<any>(
      `${this.baseUrl}/post/save`,
      formData
    );
    return newPost;
  }

  reportPost(report: postReport) {
    const post: Observable<postResponse[]> = this.http.post<any>(
      `${this.baseUrl}/report_post/report`,
      report
    );
    return post;
  }

  getReportedPost() {
    const post: Observable<postReport[]> = this.http.get<any>(
      `${this.baseUrl}/report_post/view_report`
    );
    return post;
  }

  removeReport(postId: string) {
    const post: Observable<boolean> = this.http.delete<any>(
      `${this.baseUrl}/report_post/delete_report?postId=${postId}`
    );
    return post;
  }

  removeReportedPost(postId: string) {
    const post: Observable<boolean> = this.http.delete<any>(
      `${this.baseUrl}/report_post/delete_report_post?postId=${postId}`
    );
    return post;
  }
}

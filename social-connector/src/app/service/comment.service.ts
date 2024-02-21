import { Injectable } from '@angular/core';
import { commentResponse } from '../models/commentResponse';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { commentBody } from '../models/commentBody';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getComments(id: string) {
    const comments: Observable<commentResponse[]> = this.http.get<any>(
      `${this.baseUrl}/comment/get_comments?id=${id}`
    );
    console.log('post', comments);
    return comments;
  }

  addComment(comment: commentBody) {
    console.log('comment service');
    const tk: Observable<commentResponse[]> = this.http.post<any>(
      `${this.baseUrl}/comment/add?id=${comment.postOrCommentId}`,
      comment
    );
    console.log('post', tk);
    tk.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
    return tk;
  }
}
function next(value: commentResponse[]): void {
  throw new Error('Function not implemented.');
}

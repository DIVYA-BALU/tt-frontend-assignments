import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/service/post.service';
import { commentResponse } from '../models/commentResponse';
import { CommentService } from '../service/comment.service';
import { commentBody, postToComment } from '../models/commentBody';
import { pageResponse } from '../models/pageResponse';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  comment: commentBody = {
    postOrCommentId: '',
    type: 'post',
    comment: '',
    pageId: {
      _id: '',
      name: '',
      page_handle: '',
      bio: '',
      dp: '',
      dob: new Date(),
      page_privacy: '',
      post_count: '',
      follower_count: '',
      following_count: '',
    },
  };

  @Input() postUrl: string = '';

  comments: commentResponse[] = [];
  newComment: string = '';
  constructor(
    public dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: postToComment,
    private commentService: CommentService
  ) {
    this.comment.pageId._id = localStorage.getItem('id') || '';
    this.comment.postOrCommentId = data.postId;
    console.log(this.comment, 'constructor');
  }

  getComments() {
    this.commentService.getComments(this.data.postId).subscribe({
      next: (httpResult) => {
        console.log('httpresult', httpResult);
        this.comments = httpResult;
      },
      error: (error) => {
        console.log('error', error);
      },
      complete: () => {},
    });
  }

  addComment() {
    console.log(this.comment);
    this.commentService.addComment(this.comment).subscribe({
      next: () => {
        this.getComments();
      },
    });
  }

  ngOnInit() {
    console.log('passed data', this.data, 'oninit');
    this.getComments();
  }
}

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentComponent } from '../comment/comment.component';
import { postReport, postResponse } from '../models/postResponse';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-report',
  templateUrl: './post-report.component.html',
  styleUrls: ['./post-report.component.scss'],
})
export class PostReportComponent {
  @Input() postreport: postReport = {
    postId: {
      _id: '',
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
      mediaUrl: '',
      primary_poster: '',
      likeCount: 0,
      commentCount: 0,
      caption: '',
      date_and_time: new Date(),
    },
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

  constructor(public dialog: MatDialog, private postService: PostService) {}

  removePost() {
    this.postService.removeReportedPost(this.postreport.postId._id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  removeReport() {
    this.postService.removeReport(this.postreport.postId._id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}

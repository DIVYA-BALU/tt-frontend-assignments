import { Component, Input } from '@angular/core';
import { postReport, postResponse } from '../models/postResponse';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommentComponent } from '../comment/comment.component';
import { PostService } from '../service/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { UserRoutingModule } from '../user/user-routing.module';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  standalone: true,
  styleUrls: ['./post.component.scss'],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class PostComponent {
  postreport: postReport = {
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
  likeColor: string = '';
  toogle: boolean = true;
  @Input() post: postResponse = {
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
  };
  imagePath: string = this.post.pageId.dp;

  constructor(public dialog: MatDialog, private postService: PostService) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.postService.setPostIdAndUrl(
      typeof this.post?._id == 'undefined' ? '' : this.post?._id,
      typeof this.post?.mediaUrl == 'undefined' ? '' : this.post?.mediaUrl
    );
    this.dialog.open(CommentComponent, {
      width: '150vh',
      height: '90vh',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { postId: this.post?._id, url: this.post?.mediaUrl },
    });
  }

  addLike() {
    if (this.toogle) {
      this.postService.addLike(this.post._id, 'post').subscribe({
        next: () => {
          this.likeColor = 'warn';
          this.post.likeCount++;
        },
      });
    } else {
      this.postService.removeLike(this.post._id, 'post').subscribe({
        next: () => {
          this.likeColor = '';
          this.post.likeCount--;
        },
      });
    }
    this.toogle = this.toogle ? false : true;
  }

  report() {
    this.postreport.postId._id = this.post._id;
    this.postreport.pageId._id = localStorage.getItem('id') || '';
    this.postService.reportPost(this.postreport).subscribe({
      next: (result) => {
        alert('Your report has taken');
      },
    });
  }
}

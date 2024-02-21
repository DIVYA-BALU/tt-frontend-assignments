import { Component } from '@angular/core';
import { postReport, postResponse } from '../models/postResponse';
import { HomeService } from '../service/home.service';
import { LoginService } from '../service/login.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-content-moderator-home',
  templateUrl: './content-moderator-home.component.html',
  styleUrls: ['./content-moderator-home.component.sass'],
})
export class ContentModeratorHomeComponent {
  posts: postReport[] = [];
  constructor(
    private postService: PostService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.postService.getReportedPost().subscribe({
      next: (httpResult) => {
        console.log('httpresult', httpResult);
        this.posts = httpResult;
      },
      error: (error) => {
        console.log('error', error);
      },
      complete: () => {},
    });
  }

  ngOnDestroy() {}
}

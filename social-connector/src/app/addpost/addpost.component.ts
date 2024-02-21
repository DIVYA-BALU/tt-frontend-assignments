import { Component, ElementRef, ViewChild } from '@angular/core';
import { postUpload } from '../models/postResponse';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.sass'],
})
export class AddpostComponent {
  constructor(private postService: PostService) {}

  addPost() {
    this.postService.addNewPost(this.newPost).subscribe({
      next: (result) => {
        console.log(result);
        this.isImageUploaded = false;
        this.newPost.caption = '';
      },
    });
  }

  newPost: postUpload = {
    pageId: '',
    media: '',
    primary_poster: '',
    caption: '',
  };
  imgUrl: string = '';
  file?: File;
  isImageUploaded: boolean = false;

  addFile($event: any) {
    this.newPost.media = $event.target.files[0];
    this.newPost.pageId = localStorage.getItem('id') || '';
    this.newPost.primary_poster = localStorage.getItem('id') || '';
    this.imgUrl = URL.createObjectURL($event.target.files[0]);
    console.log(this.imgUrl);
    this.isImageUploaded = true;
  }
}

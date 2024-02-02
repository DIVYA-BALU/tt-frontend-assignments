import { Component, OnInit } from '@angular/core';
import { DisplayjsonService } from './services/displayjson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
 
  posts : any = [];

  constructor(private post: DisplayjsonService) {
    this.post.getPosts().subscribe((data) => {
      this.posts = data;
    })
  }


}
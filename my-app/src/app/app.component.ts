import { Component, OnInit } from '@angular/core';
// import { PostService } from './services/post.service';
import { HttpClient } from '@angular/common/http';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  commentList:any[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    const promise = this.http.get<[]>(this.apiUrl).toPromise();

    return promise.then(
      (response: any) => {
        this.commentList = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
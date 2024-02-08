import { Component, Input } from '@angular/core';
import { postResponse } from '../models/postResponse';
import { MatDialog } from '@angular/material/dialog';
import { CommentComponent } from './comment/comment.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {

  likeColor:string ="";
  toogle:boolean = true;
  @Input() post?:postResponse;
  constructor(public dialog: MatDialog) {}
  private postUrl = new BehaviorSubject<string>("");
  postUrl$ = this.postUrl.asObservable();

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.postUrl.next(this.post?.mediaUrl !== ""? "":"");
    this.dialog.open(CommentComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  addLike(){
    if(this.toogle){
      this.likeColor = "warn"
    }
    else{
      this.likeColor = ""
    }
    this.toogle =this.toogle ? false : true;
  }
}

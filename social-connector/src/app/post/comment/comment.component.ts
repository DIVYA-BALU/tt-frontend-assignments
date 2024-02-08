import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent {

  @Input() postUrl?:string;
  @Input() postId?:string;
  constructor(public dialogRef: MatDialogRef<CommentComponent>){

  }
}

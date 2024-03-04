import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetPostService } from '../service/pet-post.service';
import { PetPost } from '../models/models';
import { AddPostComponent } from '../add-post/add-post.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-pet-post',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './pet-post.component.html',
  styleUrls: ['./pet-post.component.scss']
})
export class PetPostComponent {


  constructor(public dialog: MatDialog,private petPostService:PetPostService){}
  
  petPosts:PetPost[]=[]

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AddPostComponent, {
      width: '150vh',
      height: '90vh',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {  },
    });
  }

  ngOnInit(){
    this.petPostService.getAnimalPostById().subscribe({next:(petPost)=>{
      console.log(petPost);
      
      this.petPosts = petPost;
    }})
  }
}

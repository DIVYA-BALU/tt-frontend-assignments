import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetPostService } from '../service/pet-post.service';
import { PetPost } from '../models/models';
import { AddPostComponent } from '../add-post/add-post.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-post',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, MatMenuModule],
  templateUrl: './pet-post.component.html',
  styleUrls: ['./pet-post.component.scss'],
})
export class PetPostComponent {
  constructor(
    public dialog: MatDialog,
    private petPostService: PetPostService
  ) {}

  petPosts: PetPost[] = [];

  private postSubscription: Subscription = new Subscription();
  private idSubscription: Subscription = new Subscription();

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AddPostComponent, {
      width: '150vh',
      height: '90vh',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {},
    });
  }

  deletePost(id: string) {
    this.postSubscription = this.petPostService.deletePost(id).subscribe({
      next: (val) => {
        this.loadDate();
      },
    });
  }

  loadDate() {
    this.idSubscription = this.petPostService.getAnimalPostById().subscribe({
      next: (petPost) => {
        petPost;

        this.petPosts = petPost;
      },
    });
  }

  ngOnInit() {
    this.loadDate();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
    this.idSubscription.unsubscribe();
  }
}

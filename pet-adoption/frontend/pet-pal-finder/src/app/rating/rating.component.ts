import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIcons, faStar } from '@fortawesome/free-solid-svg-icons';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rating } from '../models/models';
import { RatingService } from '../service/rating.service';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  faStar = faStar;

  constructor(
    public dialogRef: MatDialogRef<RatingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Rating,
    private ratingService: RatingService
  ) {}

  @Input() rating: number = 0;
  @Input() readonly: boolean = false;
  private ratingSubscription: Subscription = new Subscription();
  setRating(value: number) {
    if (this.readonly) return;
    this.rating = value;
  }

  sendRating() {
    this.data.rating = this.rating;
    console.log(this.rating);
    this.data._id = null;
    this.ratingSubscription = this.ratingService
      .addRating(this.data)
      .subscribe({
        next: (val) => {
          this.dialogRef.close();
        },
      });
  }

  ngOnDestroy() {
    this.ratingSubscription.unsubscribe();
  }
}

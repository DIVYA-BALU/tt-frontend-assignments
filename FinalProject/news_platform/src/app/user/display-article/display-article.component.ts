import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { DisplayArticleService } from './display-article.service';
import Swal from 'sweetalert2';
import { SavedStoriesService } from '../saved-stories/saved-stories.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.scss'],
})
export class DisplayArticleComponent implements OnDestroy, OnInit {
  articleId: string = '';
  article!: Article;
  savedArticle!: boolean;
  isSubscribed!: boolean;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private displayService: DisplayArticleService,
    private savedStoriesService: SavedStoriesService,
    private router: Router,
    private sharedService: SharedServiceService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe((_value) => {
        this.articleId = _value['id'];
        this.getArticle();
        this.increaseViews();
        this.getSavedArticle();
      })
    );
  }

  getArticle() {
    this.subscriptions.push(
      this.displayService.getArticle(this.articleId).subscribe((data) => {
        if (data) {
          this.article = data;
        }

        this.sharedService.subscribedValueData$.subscribe((data) => {
          const date1 = new Date(this.article.date);
          const date2 = new Date();

          const areDatesEqual = date1.getDate() === date2.getDate();
          const areMonthEqual = date1.getMonth() === date2.getMonth();
          const areYearEqual = date1.getFullYear() === date2.getFullYear();

          if (
            data === false &&
            areDatesEqual &&
            areMonthEqual &&
            areYearEqual
          ) {
            this.isSubscribed = false;
          } else {
            this.isSubscribed = true;
          }
        });
      })
    );
  }

  increaseViews() {
    this.displayService.increaseViews(this.articleId);
  }

  onSave() {
    this.subscriptions.push(
      this.displayService.saveArtcile(this.articleId).subscribe(
        (data) => {
          this.openSnackBar();
          this.getSavedArticle();
        }
      )
    );
  }

  getSavedArticle() {
    this.subscriptions.push(
      this.savedStoriesService.getSavedArticle().subscribe((data) => {
        data.forEach((value) => {
          if (value.article.id === this.articleId) {
            this.savedArticle = true;
          }
        });
      })
    );
  }

  unSave() {
    this.subscriptions.push(
      this.displayService.unsaveArticle(this.articleId).subscribe(
        (data) => {
          this.openSnackBar();
          this.savedArticle = false;
        }
      )
    );
  }

  durationInSeconds = 2;

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  onClick() {
    this.router.navigate(['/subscription']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class PizzaPartyComponent {}
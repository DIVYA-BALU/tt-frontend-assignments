import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { DisplayArticleService } from './display-article.service';
import Swal from 'sweetalert2';
import { SavedStoriesService } from '../saved-stories/saved-stories.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';

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
    private sharedService: SharedServiceService
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
          Swal.fire({
            title: 'Thank you!',
            text: 'Article saved successfully!',
            icon: 'success',
          });
          this.getSavedArticle();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
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
          Swal.fire({
            title: 'Thank you!',
            text: 'Article unsaved successfully!',
            icon: 'success',
          });
          this.savedArticle = false;
          console.log(this.savedArticle);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      )
    );
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

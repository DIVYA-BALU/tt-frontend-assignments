import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/model/News';
import { DisplayNewsService } from './display-news.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-news',
  templateUrl: './display-news.component.html',
  styleUrls: ['./display-news.component.scss'],
})
export class DisplayNewsComponent implements OnDestroy {
  newsId: string = '';
  news!: News;
  isSubscribed!: boolean;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private displayService: DisplayNewsService,
    private sharedService: SharedServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe((_value) => {
        this.newsId = _value['id'];
        this.getNews();
        this.increaseViews();
      })
    );
    this.showSpinner();
  }

  getNews() {
    this.subscriptions.push(
      this.displayService.getNews(this.newsId).subscribe((data) => {
        if (data) {
          this.news = data;
        }

        this.sharedService.subscribedValueData$.subscribe((data) => {
          const date1 = new Date(this.news.date);
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
    this.displayService.increaseViews(this.newsId);
  }

  spinner!: boolean;

  showSpinner() {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
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

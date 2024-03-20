import { Component, OnDestroy, OnInit } from '@angular/core';
import { News } from 'src/app/model/News';
import { DailyNewsService } from './daily-news.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-daily-news',
  templateUrl: './daily-news.component.html',
  styleUrls: ['./daily-news.component.scss'],
})
export class DailyNewsComponent implements OnInit, OnDestroy {
  newsContents!: News[];
  subscription: Subscription = new Subscription();

  constructor(
    private dailynewsService: DailyNewsService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.showSpinner();
    this.getDailyNews();
    this.sharedService.setBadge(false);
  }

  getDailyNews() {
    this.subscription = this.dailynewsService
      .getDailyNews()
      .subscribe((data) => {
        this.newsContents = data;
      });
  }

  spinner!: boolean;

  showSpinner() {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

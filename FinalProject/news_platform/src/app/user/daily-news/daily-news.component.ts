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
  newsObj!: any;
  newsDatas: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private dailynewsService: DailyNewsService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.getDailyNews();
    this.getDailyNewsApi();
    this.sharedService.setBadge(false);
  }

  getDailyNews() {
    this.subscription.add(
      this.dailynewsService.getDailyNews().subscribe((data) => {
        this.newsContents = data;
      })
    );
  }

  getDailyNewsApi() {
    this.subscription.add(
      this.dailynewsService.getDailyNewsApi().subscribe((data) => {
        this.newsDatas = data.articles;
        console.log(this.newsDatas);
        this.displayNews();
      })
    );
  }

  timer!: any;
  index: number = 0;

  displayNews() {
    this.timer = setTimeout(() => {
      if (this.index === this.newsDatas.length-1) {
        this.index = 0;
      } else {
        this.index++;
      }

      this.displayNews();
    }, 5000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

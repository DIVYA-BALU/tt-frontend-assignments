import { Component, OnDestroy, OnInit } from '@angular/core';
import { News } from 'src/app/model/News';
import { SensationalNewsService } from './sensational-news.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sensational-news',
  templateUrl: './sensational-news.component.html',
  styleUrls: ['./sensational-news.component.scss'],
})
export class SensationalNewsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  newsContents!: News[];

  constructor(
    private sensationalnewsService: SensationalNewsService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.getSensationalNews();
    this.sharedService.setBadge(false);
  }

  getSensationalNews() {
    this.subscription = this.sensationalnewsService
      .getSensationalNews()
      .subscribe((data) => {
        this.newsContents = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

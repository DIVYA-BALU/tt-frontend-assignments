import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from 'src/app/model/Article';
import { HomeService } from '../home/home.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  articles: Article[] = [];
  pageIndex: number = 0;

  constructor(
    private homeService: HomeService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.showSpinner();
    this.getArticle(this.pageIndex, 5);
    this.sharedService.setBadge(false);
  }

  getArticle(pageIndex: number, pageSize: number) {
    this.subscription = this.homeService
      .getArticle(pageIndex, pageSize)
      .subscribe((data) => {
        data.content.forEach((data) => {
          this.articles.push(data);
        });
      });
  }

  loadMore() {
    this.getArticle(++this.pageIndex, 5);
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

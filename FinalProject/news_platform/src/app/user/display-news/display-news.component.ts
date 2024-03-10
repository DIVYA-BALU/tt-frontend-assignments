import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/model/News';
import { DisplayArticleService } from '../display-article/display-article.service';
import { DisplayNewsService } from './display-news.service';

@Component({
  selector: 'app-display-news',
  templateUrl: './display-news.component.html',
  styleUrls: ['./display-news.component.scss'],
})
export class DisplayNewsComponent {
  newsId: string = '';
  news!: News;

  constructor(
    private route: ActivatedRoute,
    private displayService: DisplayNewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((_value) => {
      this.newsId = _value['id'];
      this.getArticle();
      this.increaseViews();
    });
    this.showSpinner();
  }

  getArticle() {
    this.displayService.getNews(this.newsId).subscribe((data) => {
      if (data) {
        this.news = data;
      }
    });
  }

  increaseViews() {
    this.displayService.increaseViews(this.newsId);
  }

  spinner!: boolean;

  showSpinner() {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 5000);
  }
}

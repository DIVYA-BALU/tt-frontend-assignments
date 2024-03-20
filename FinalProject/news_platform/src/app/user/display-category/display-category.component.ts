import { Component, OnDestroy, OnInit } from '@angular/core';
import { News } from 'src/app/model/News';
import { CommonService } from './common-service.service';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sports',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.scss'],
})
export class DisplayCategoryComponent implements OnInit, OnDestroy {
  sportsNews!: News[];
  category!: string;
  subscriptions: Subscription[] = [];

  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe((__values) => {
        this.category = __values['category'];
        this.getNews();
      })
    );
  }

  getNews() {
    this.subscriptions.push(
      this.commonService.getCategoryNews(this.category).subscribe((data) => {
        this.sportsNews = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}

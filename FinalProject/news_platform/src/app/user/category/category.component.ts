import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { News } from 'src/app/model/News';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  categories: string[] = [
    'ENTERTAINMENT',
    'SPORTS',
    'POLITICS',
    'INTERNATIONAL',
    'LOCAL',
    'BUSINESS',
    'JOURNALISM',
    'HARD_NEWS',
    'SOFT_NEWS',
    'SCIENCE_AND_TECHNOLOGY',
    'HEALTH',
    'EDUCATION',
  ];

  selectedValue!: string;
  newsContents!: News[];

  constructor(
    private categoryService: CategoryService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit(): void {
    this.sharedService.setBadge(false);
  }

  select(val: string) {
    this.selectedValue = val;
    this.getNews();
  }

  getNews() {
    this.subscription = this.categoryService
      .getNews(this.selectedValue)
      .subscribe((data) => {
        this.newsContents = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

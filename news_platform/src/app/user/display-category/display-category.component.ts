import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/News';
import { CommonService } from './common-service.service';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-sports',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.scss'],
})
export class DisplayCategoryComponent implements OnInit {
  sportsNews!: News[];
  category!: string;

  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((__values) => {
      this.category = __values['category'];
      this.getNews();
    });
  }

  getNews() {
    this.commonService.getCategoryNews(this.category).subscribe((data) => {
      this.sportsNews = data;
    });
  }
}

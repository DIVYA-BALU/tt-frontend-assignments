import { Component } from '@angular/core';
import { CategoryService } from './category.service';
import { News } from 'src/app/model/News';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent{

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

  constructor(private categoryService: CategoryService){}

  select(val: string){
    this.selectedValue = val;
    this.getNews();
  }

  getNews(){
    this.categoryService.getNews(this.selectedValue).subscribe( (data) => {
      this.newsContents = data;
    })
  }
}

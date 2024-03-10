import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ShortReads } from 'src/app/model/ShortReads';
import { Article } from 'src/app/model/Article';
import { Router } from '@angular/router';
import { News } from 'src/app/model/News';
import { DailyNewsService } from '../daily-news/daily-news.service';
import { CommonService } from '../display-category/common-service.service';
import { Explainers } from 'src/app/model/Explainers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  shortReads: ShortReads[] = [];
  articles: Article[] = [];
  newsContents!: News[];
  topNews!: News[];
  allNews!: News[];
  sportsNews!: News[];
  entainmentNews!: News[];
  explainers!: Explainers[];

  constructor(private homeService: HomeService, private route: Router, private dailynewsService: DailyNewsService, private commonService: CommonService) {}

  ngOnInit(){
    this.getShortReads(0, 2);
    this.getArticle(0, 2);
    this.getDailyNews();
    this.getTopNews();
    this.getAllNews();
    this.getSportsNews();
    this.getEntainmentNews();
    this.getExplainers();
  }
 
  getShortReads(pageIndex: number, pageSize: number){
    this.homeService.getShortReads(pageIndex, pageSize).subscribe( (data) => {
      this.shortReads = data.content;
    })
  }

  getArticle(pageIndex: number, pageSize: number){
    this.homeService.getArticle(pageIndex, pageSize).subscribe( (data) => {
      this.articles = data.content;
    })
  }

  onClick(){
    this.route.navigate(['/user/form']);
  }

  getDailyNews() {
    this.dailynewsService.getDailyNews().subscribe((data) => {
      this.newsContents = data.slice(0, 10);
    });
  }

  getTopNews(){
    this.homeService.getTopNews().subscribe( (data) => {
      this.topNews = data.slice(0, 10);
    })
  }

  getAllNews(){
    this.homeService.getAllNews().subscribe( (data) => {
      this.allNews = data.slice(0, 12);
    })
  }

  getSportsNews() {
    this.commonService.getCategoryNews('SPORTS').subscribe((data) => {
      this.sportsNews = data.slice(0,5);
    });
  }
  
  getEntainmentNews(){
    this.commonService.getCategoryNews('ENTERTAINMENT').subscribe((data) => {
      this.entainmentNews = data.slice(0,5);
    });
  }

  getExplainers(){
    this.homeService.getExplainer(0, 5).subscribe( (data) => {
      this.explainers = data.content;
    })
  }
}

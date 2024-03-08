import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ShortReads } from 'src/app/model/ShortReads';
import { Article } from 'src/app/model/Article';
import { Router } from '@angular/router';
import { News } from 'src/app/model/News';
import { DailyNewsService } from '../daily-news/daily-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  shortReads: ShortReads[] = [];
  articles: Article[] = [];
  newsContents!: News[];

    constructor(private homeService: HomeService, private route: Router, private dailynewsService: DailyNewsService) {}

  ngOnInit(){
    this.getShortReads(0, 2);
    this.getArticle(0, 2);
    this.getDailyNews();
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
  
}

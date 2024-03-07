import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ShortReads } from 'src/app/model/ShortReads';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  shortReads: ShortReads[] = [];
  articles: Article[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(){
    this.getShortReads(0, 2);
    this.getArticle(0, 2);
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
}

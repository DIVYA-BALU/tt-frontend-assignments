import { Component } from '@angular/core';
import { Article } from 'src/app/model/Article';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  articles: Article[] = [];
  pageIndex: number = 0;

  constructor(private homeService: HomeService) {}

  ngOnInit(){
    this.getArticle(this.pageIndex, 5);
  }
  
  getArticle(pageIndex: number, pageSize: number){
    this.homeService.getArticle(pageIndex, pageSize).subscribe( (data) => {
      data.content.forEach( (data) => {
        this.articles.push(data);
      })
    })
  }

  loadMore(){
    this.getArticle(++this.pageIndex, 5);
  }
}

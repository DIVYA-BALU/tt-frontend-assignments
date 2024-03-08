import { Component } from '@angular/core';
import { Article } from 'src/app/model/Article';
import { HomeService } from '../home/home.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  articles: Article[] = [];
  pageIndex: number = 0;

    constructor(private homeService: HomeService, 
      private sharedService: SharedServiceService) {}

  ngOnInit(){
    this.showSpinner();
    this.getArticle(this.pageIndex, 5);
    this.sharedService.setBadge(false);
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

  spinner!: boolean;

  showSpinner(){
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
  }
}

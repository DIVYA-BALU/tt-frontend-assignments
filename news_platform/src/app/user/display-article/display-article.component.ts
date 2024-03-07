import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { DisplayArticleService } from './display-article.service';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.scss']
})
export class DisplayArticleComponent {

  articleId: string = '';
  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private displayService: DisplayArticleService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((_value) => {
      this.articleId = _value['id'];
      this.getArticle();
      this.increaseViews();
    });
  }

  getArticle() {
    this.displayService.getArticle(this.articleId).subscribe((data) => {
      if (data) {
        this.article = data;
        console.log(this.article);
      }
    });
  }

  increaseViews(){
    this.displayService.increaseViews(this.articleId);
  }
}

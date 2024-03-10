import { Component } from '@angular/core';
import { ArticleSaveForLater } from 'src/app/model/articleSaveForLater';
import { SavedStoriesService } from './saved-stories.service';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-saved-stories',
  templateUrl: './saved-stories.component.html',
  styleUrls: ['./saved-stories.component.scss']
})
export class SavedStoriesComponent {

  articles: Article[] = [];

  constructor(private saveForLaterService: SavedStoriesService){
    this.getSavedArticle();
  }

  getSavedArticle(){
    this.saveForLaterService.getSavedArticle().subscribe((data) => {
      data.forEach( (value) => {
        this.articles.push(value.article);
      })
    })
  }
}

import { Component, OnDestroy } from '@angular/core';
import { ArticleSaveForLater } from 'src/app/model/ArticleSaveForLater';
import { SavedStoriesService } from './saved-stories.service';
import { Article } from 'src/app/model/Article';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-saved-stories',
  templateUrl: './saved-stories.component.html',
  styleUrls: ['./saved-stories.component.scss'],
})
export class SavedStoriesComponent implements OnDestroy {
  subscription: Subscription = new Subscription();
  articles: Article[] = [];

  constructor(private saveForLaterService: SavedStoriesService) {
    this.getSavedArticle();
  }

  getSavedArticle() {
    this.subscription = this.saveForLaterService
      .getSavedArticle()
      .subscribe((data) => {
        data.forEach((value) => {
          this.articles.push(value.article);
        });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

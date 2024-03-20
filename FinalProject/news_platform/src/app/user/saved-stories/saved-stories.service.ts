import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleSaveForLater } from 'src/app/model/ArticleSaveForLater';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SavedStoriesService {

  url: string = environment.getSaveArticleUrl;

  constructor(private http: HttpClient) { }

  getSavedArticle(): Observable<ArticleSaveForLater[]>{
    return this.http.get<ArticleSaveForLater[]>(this.url);
  }
}

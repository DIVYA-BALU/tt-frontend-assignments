import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/ArticleDTO';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  createArticleUrl: string = environment.createArticleUrl;

  constructor(private http: HttpClient) {}

  createArticle(article: Article): Observable<string> {
    console.log(article);

    const formData: FormData = new FormData();
    formData.append('articleUid', article.articleUid);
    formData.append('title', article.title);
    formData.append('content', article.content);
    formData.append('category', article.category);

    for (let i = 0; i < article.images.length; i++) {
      formData.append('images', article.images[i], article.images[i].name);
    }

    return this.http.post(this.createArticleUrl, formData, {
      responseType: 'text',
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsDTO } from 'src/app/model/NewDTO';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CreateNewsService {
  createNewsUrl: string = environment.createNewsUrl;

  constructor(private http: HttpClient) {}

  createNews(news: NewsDTO): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('newsUid', news.newsUid);
    formData.append('title', news.title);
    formData.append('synopsis', news.synopsis);
    formData.append('content', news.content);
    formData.append('category', news.category);

    for (let i = 0; i < news.images.length; i++) {
      formData.append('images', news.images[i], news.images[i].name);
    }

    return this.http.post(this.createNewsUrl, formData, {
      responseType: 'text',
    });
  }
}

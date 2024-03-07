import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserNewsDTO } from 'src/app/model/user-news-dto';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  url: string = environment.userNewsUrl;

  constructor(private http: HttpClient) {}

  createMyNews(userNews: UserNewsDTO): Observable<string> {

    const formdata = new FormData();
    formdata.append('name', userNews.name);
    formdata.append('email', userNews.email);
    formdata.append('phoneNo', userNews.phoneNo);
    formdata.append('content', userNews.content);

    userNews.images.forEach( (data) => {
      formdata.append('images', data);
    })

    return this.http.post(this.url, formdata, { responseType: 'text' });
  }
}

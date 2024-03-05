import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortReadsDTO } from 'src/app/model/ShortReadsDTO';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreateShortReadsService {

  createShortReadsUrl: string = environment.createShortReadsUrl;

  constructor(private http: HttpClient) {}

  createShortReads(shortReads: ShortReadsDTO): Observable<string> {
    console.log(shortReads);

    const formData: FormData = new FormData();
    formData.append('shortReadsUid', shortReads.shortReadsUid);
    formData.append('title', shortReads.title);
    formData.append('content', shortReads.content);
    formData.append('category', shortReads.category);
    formData.append('image', shortReads.image);

    return this.http.post(this.createShortReadsUrl, formData, {
      responseType: 'text',
    });
  }
}

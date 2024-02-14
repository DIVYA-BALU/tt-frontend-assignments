import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  url: string = environment.addAnnouncementUrl;

  constructor(private httpClient: HttpClient) { }

  addAnnounce(announce: Announcement): Observable<string>{
    return this.httpClient.post(this.url, announce, { responseType : "text"});
  }
}

interface Announcement{
  announcement: string;
}
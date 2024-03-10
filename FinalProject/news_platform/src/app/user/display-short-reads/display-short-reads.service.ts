import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortReads } from 'src/app/model/ShortReads';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DisplayShortReadsService {

  url: string = environment.getShortReadsByIdUrl;
  increaseViewsUrl: string = environment.increaseShortReadsViews;

  constructor(private http: HttpClient) { }

  getShortReads(id: string): Observable<ShortReads>{
    return this.http.get<ShortReads>(`${this.url}/${id}`);
  }

  increaseViews(shortReadsId: string): void{
    this.http.post(`${this.increaseViewsUrl}/${shortReadsId}`, {}).subscribe();
  }
}

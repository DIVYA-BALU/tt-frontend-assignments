import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CourseDTO } from '../models/course-dto';

@Injectable({
  providedIn: 'root',
})
export class SearchPageService {
  url: string = environment.searchUrl;

  constructor(private http: HttpClient) {}

  value: BehaviorSubject<string> = new BehaviorSubject<string>('');
  value$ = this.value.asObservable();

  data: ReplaySubject<string> = new ReplaySubject<string>();

  setValue(val: string){
    this.value.next(val);
  }

  search(val: string): Observable<CourseDTO[]> {
    // let param = new HttpParams();
    // param = param.append('search', val);
    return this.http.get<CourseDTO[]>(`${this.url}/${val}`);
  }
}

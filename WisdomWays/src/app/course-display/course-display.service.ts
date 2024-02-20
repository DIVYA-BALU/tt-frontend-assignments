import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseDisplayService {

  getCourseByIdUrl: string = environment.getCourseByIdUrl;

  constructor(private http: HttpClient,) { }

  getCourseById(variable: string): Observable<Course>{
    return this.http.get<Course>(`${this.getCourseByIdUrl}/${variable}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CourseDTO } from '../models/course-dto';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  getAllCourseUrl: string = environment.getAllCourseUrl;

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.getAllCourseUrl);
  }
}


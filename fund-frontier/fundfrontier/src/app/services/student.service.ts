import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Application } from '../model/application';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentUrl = environment.studentUrl;
  constructor(private http: HttpClient) { }

  saveApplication(application:FormData): Observable<Application>{
     return this.http.post<Application>(`${this.studentUrl}/save`,application);
  }

  getStudents(): Observable<Application[]>{
    return this.http.get<Application[]>(`${this.studentUrl}/getallapproved`)
  }

  getStudentsByYear(year: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.studentUrl}/searchbyyear/${year}`)
  }

  getStudentsByCourse(course:string):Observable<Application[]> {
    return this.http.get<Application[]>(`${this.studentUrl}/searchbygroup/${course}`)
  }

  getStudentsByCollege(college:string):Observable<Application[]> {
    return this.http.get<Application[]>(`${this.studentUrl}/searchbycollege/${college}`)
  }

  viewStudent(email:string): Observable<Application> {
    return this.http.get<Application>(`${this.studentUrl}/get/${email}`)
  }
}

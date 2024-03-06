import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Application } from '../model/application';
import { Observable } from 'rxjs';
import { Successstory } from '../model/successstory';
import { Page } from '../model/page';
import { Studentdetails } from '../model/studentdetails';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentUrl = environment.studentUrl;
  storyUrl = environment.storyUrl;

  constructor(private http: HttpClient) {}

  saveApplication(application: FormData): Observable<Application> {
    return this.http.post<Application>(`${this.studentUrl}/save`, application);
  }

  getStudents(): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.studentUrl}/getallapproved`);
  }

  getAllPending(
    pageIndex: number,
    pageSize: number
  ): Observable<Page<Studentdetails>> {

    const param = new HttpParams()
      .set('pageNo', pageIndex)
      .set('pageSize', pageSize);

    return this.http.get<Page<Studentdetails>>(
      `${this.studentUrl}/getallpending`, {params: param}
    );

  }

  getStudentsByYear(year: string): Observable<Application[]> {
    return this.http.get<Application[]>(
      `${this.studentUrl}/searchbyyear/${year}`
    );
  }

  getStudentsByCourse(course: string): Observable<Application[]> {
    return this.http.get<Application[]>(
      `${this.studentUrl}/searchbygroup/${course}`
    );
  }

  getStudentsByCollege(college: string): Observable<Application[]> {
    return this.http.get<Application[]>(
      `${this.studentUrl}/searchbycollege/${college}`
    );
  }

  viewStudent(email: string): Observable<Application> {
    return this.http.get<Application>(`${this.studentUrl}/get/${email}`);
  }

  getstories(): Observable<Successstory[]> {
    return this.http.get<Successstory[]>(`${this.storyUrl}/getall`);
  }

  setApproved(
    name: string,
    student: Studentdetails
  ): Observable<Studentdetails> {
    console.log(student);

    return this.http.put<Studentdetails>(
      `${this.studentUrl}/approved/${name}`,
      student
    );
  }

  getAllStudents(
    pageIndex: number,
    pageSize: number
  ): Observable<Page<Studentdetails>> {

    const param = new HttpParams().
    set('pageNo',pageIndex).
    set('paseSize',pageSize);
    
    return this.http.get<Page<Studentdetails>>(`${this.studentUrl}/findall`,{params: param});
  }
}

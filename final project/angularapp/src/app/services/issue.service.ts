import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../models/issue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private baseUrl='http://localhost:8080/issue';

  constructor(private http: HttpClient) { }

  public getIssues(): Observable<Issue[]> {
    const url = `${this.baseUrl}`
    return this.http.get<Issue[]>(url);
  }

  public addIssue(issue: Issue): Observable<Issue> {
    const url = `${this.baseUrl}`
    return this.http.post<Issue>(url, issue);
  }

  public updateIssue(issue: Issue): Observable<Issue> {
    const url = `${this.baseUrl}/update`
    return this.http.put<Issue>(url, issue);
  }

  public deleteIssue(issueId: string | undefined): Observable<any> {
    const url = `${this.baseUrl}/delete/${issueId}`
    return this.http.delete<any>(url);
  }
  
  public getIssueByIssueId(issueId: string | undefined): Observable<any> {
    const url = `${this.baseUrl}/${issueId}`;
    return this.http.get<any>(url);
  }

  public getIssuesByLocation(): Observable<Issue[]> {
    const location = localStorage.getItem('location');
    const url = `${this.baseUrl}/locations/${location}`;
    return this.http.get<Issue[]>(url);
  }

  public getIssuesByUserId(): Observable<Issue[]> {
    const userId = localStorage.getItem('userId');
    const url = `${this.baseUrl}/user/${userId}`;
    return this.http.get<Issue[]>(url);
  }
}

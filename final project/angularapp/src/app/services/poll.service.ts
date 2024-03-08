import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private baseUrl='http://localhost:8080/poll';
  
  constructor(private http: HttpClient) { }

  public addPoll(poll: Poll): Observable<Poll> {
    let url = `${this.baseUrl}`;
    return this.http.post<Poll>(url, poll);
  }

  //to get issues based on userId
  public getPollsByUserId(userId:string): Observable<Poll[]> {
    let url = `${this.baseUrl}/userId/${userId}`;
    return this.http.get<Poll[]>(url);
  }
  
  //to get issues based on issueId
  public getPollsByIssueId(issueId: string | undefined): Observable<Poll[]> {
    let url = `${this.baseUrl}/issueId/${issueId}`;
    return this.http.get<Poll[]>(url);
  }

}

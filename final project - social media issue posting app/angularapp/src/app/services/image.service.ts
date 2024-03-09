import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileData } from '../models/file-data';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  private baseUrl='http://localhost:8080/image/fileSystem';

  constructor(private http: HttpClient) { }

  postImage(formData:FormData): Observable<FileData>{
    let url = `${this.baseUrl}`
    return this.http.post<FileData>(url, formData);
  }

  getImage(issueId: string | undefined): Observable<FileData>{
    let url = `${this.baseUrl}/${issueId}`
    return this.http.get<FileData>(url);
  }
}

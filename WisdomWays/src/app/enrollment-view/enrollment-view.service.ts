import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { EnrollmentsDTO } from '../models/enrollmentDTO';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentViewService {
  url: string = environment.getEnrollmentsUrl;

  listOfUsers: EnrollmentsDTO[] = [];

  constructor(private httpClient: HttpClient) {}

  getAllEnrollments(body: string, pageSize: number, pageIndex: number): Observable<EnrollmentsDTO[]> {
    return this.httpClient.get<EnrollmentsDTO[]>(`${this.url}/${body}`);
  }
}

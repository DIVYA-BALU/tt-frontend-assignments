import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentViewService {

  url: string = environment.getEnrollmentsUrl;

  listOfUsers: EnrollmentsDTO[] = [];

  constructor(private httpClient: HttpClient) { }

  getAllEnrollments(body: string){
    // console.log( body);
    return this.httpClient.get<EnrollmentsDTO[]>(`${this.url}/${body}`);
  }
}

interface EnrollmentsDTO {
  username: string;
  enrollDate: Date;
  status: string;
}

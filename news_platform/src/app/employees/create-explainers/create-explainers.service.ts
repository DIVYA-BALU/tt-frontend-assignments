import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExplainersDTO } from 'src/app/model/ExplainersDTO';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreateExplainersService {

  createExplainersUrl: string = environment.createExplainersUrl;

  constructor(private http: HttpClient) {}

  createExplainers(explainers: ExplainersDTO): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('explainersUid', explainers.explainersUid);
    formData.append('title', explainers.title);
    formData.append('content', explainers.content);
    formData.append('image', explainers.image);

    return this.http.post(this.createExplainersUrl, formData, {
      responseType: 'text',
    });
  }
}

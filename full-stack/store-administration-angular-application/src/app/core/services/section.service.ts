import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { Section } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

  saveSection(section: Section): Observable<Section>{
    return this.http.post<Section>(`${environment.API_URL}${Constants.API_END_POINT.SECTIONS}`, section)
  }

  getPaginationSections(){
    return this.http.get<Section[]>(`${environment.API_URL}${Constants.API_END_POINT.SECTIONS}/page`)
  }
  
  getAllSections(){
    return this.http.get<Section[]>(`${environment.API_URL}${Constants.API_END_POINT.SECTIONS}`)
  }
}

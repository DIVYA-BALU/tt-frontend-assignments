import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { PaginatedResponse, Section } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private paginationSections: BehaviorSubject<PaginatedResponse<Section>> = new BehaviorSubject<PaginatedResponse<Section>>({
    content: [],
    pageable: {
      pageNumber: 0,
      pageSize: 10
    },
    totalPages: 0,
    totalElements: 0
  });

  public paginationSections$: Observable<PaginatedResponse<Section>> = this.paginationSections.asObservable();

  constructor(private http: HttpClient) { 
    this.setPaginationSectionsSubject();
  }

  saveSection(section: Section): Observable<Section>{
    return this.http.post<Section>(`${environment.API_URL}${Constants.API_END_POINT.SECTIONS}`, section)
  }

  getPaginationSections(): Observable<PaginatedResponse<Section>> {
    return this.http.get<PaginatedResponse<Section>>(`${environment.API_URL}${Constants.API_END_POINT.SECTIONS}/page`)
  }
  
  setPaginationSectionsSubject() {
    this.getPaginationSections().
      subscribe({
        next: (paginationSections) => {
          this.paginationSections.next(paginationSections);
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404)
            alert('Unable to connect to the server');
          else
            alert(`${error.status} found`);
        }
      });
    ;
  }

  getAllSections(): Observable<Section[]>{
    return this.http.get<Section[]>(`${environment.API_URL}${Constants.API_END_POINT.SECTIONS}`)
  }
}

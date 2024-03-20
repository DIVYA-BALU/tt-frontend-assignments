import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
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

  private sections: BehaviorSubject<Section[]> = new BehaviorSubject<Section[]>([]);

  public sections$: Observable<Section[]> = this.sections.asObservable();
  private sectionsSubscription: Subscription = new Subscription;
  private paginationSectionsSubscription: Subscription = new Subscription;

  constructor(private http: HttpClient) {
  }

  saveSection(section: Section): Observable<Section> {
    return this.http.post<Section>(`${environment.API_URL}${Constants.API_END_POINT.SECTIONS}`, section)
  }

  getPaginationSections(page: number, size: number): Observable<PaginatedResponse<Section>> {
    const params = new HttpParams()
      .set('pageNo', page.toString())
      .set('pageSize', size.toString());
    return this.http.get<PaginatedResponse<Section>>(`${environment.API_URL}${Constants.API_END_POINT.SECTIONS}/page`, { params: params })
  }

  setPaginationSectionsSubject(page: number = 0, size: number = 10) {
    this.paginationSectionsSubscription = this.getPaginationSections(page, size)
      .subscribe((paginationSections) => {
        this.paginationSections.next(paginationSections);
      });
  }

  getAllSections(): Observable<Section[]> {
    return this.http.get<Section[]>(`${environment.API_URL}${Constants.API_END_POINT.SECTIONS}`)
  }

  setSectionsSubject() {
    this.sectionsSubscription = this.getAllSections()
      .subscribe((sections) => {
        this.sections.next(sections);
      });
  }

  unSubscribeAll() {
    if (this.sectionsSubscription)
      this.sectionsSubscription.unsubscribe();

    if (this.paginationSectionsSubscription)
      this.paginationSectionsSubscription.unsubscribe();
  }
}

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { Branch, NewBranch, PaginatedResponse } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private paginatedBranches: BehaviorSubject<PaginatedResponse<Branch>> = new BehaviorSubject<PaginatedResponse<Branch>>({
    content: [],
    pageable: {
      pageNumber: 0,
      pageSize: 10
    },
    totalPages: 0,
    totalElements: 0
  });

  public paginatedBranches$: Observable<PaginatedResponse<Branch>> = this.paginatedBranches.asObservable();

  constructor(private http: HttpClient) {
    this.setPaginatedBranchesSubject();
  }

  saveBranch(newbranch: NewBranch): Observable<Branch> {
    return this.http.post<Branch>(
      `${environment.API_URL}${Constants.API_END_POINT.BRANCHES}`,
      newbranch
    ).pipe(catchError((error) => {
      return throwError(() => error);
    })
    );
  }

  getPaginatedBranches(): Observable<PaginatedResponse<Branch>> {
    return this.http.get<PaginatedResponse<Branch>>(`${environment.API_URL}${Constants.API_END_POINT.BRANCHES}/page`);
  }

  setPaginatedBranchesSubject() {
    this.getPaginatedBranches().
      subscribe({
        next: (paginatedBranches) => {
          this.paginatedBranches.next(paginatedBranches);
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

  getAllBranches(): Observable<Branch[]>  {
    return this.http.get<Branch[]>(`${environment.API_URL}${Constants.API_END_POINT.BRANCHES}`)
  }

  addSection(branchId: string, sectionId: string): Observable<Branch> {
    const params = new HttpParams().set('sectionId', sectionId);
    return this.http.post<Branch>(`${environment.API_URL}${Constants.API_END_POINT.ADD_BRANCH_SECTION(branchId)}`, { params: params })
  }
}

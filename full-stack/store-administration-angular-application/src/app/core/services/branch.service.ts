import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, catchError, throwError } from 'rxjs';
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

  private branchesSubscription: Subscription = new Subscription;
  private paginatedBranchesSubscription: Subscription = new Subscription;

  public paginatedBranches$: Observable<PaginatedResponse<Branch>> = this.paginatedBranches.asObservable();

  private branches: BehaviorSubject<Branch[]> = new BehaviorSubject<Branch[]>([]);
  public branches$: Observable<Branch[]> = this.branches.asObservable();

  constructor(private http: HttpClient) {
  }

  saveBranch(newbranch: NewBranch): Observable<Branch> {
    return this.http.post<Branch>(
      `${environment.API_URL}${Constants.API_END_POINT.BRANCHES}`,
      newbranch
    );
  }

  getPaginatedBranches(page: number, size: number): Observable<PaginatedResponse<Branch>> {
    const params = new HttpParams()
      .set('pageNo', page.toString())
      .set('pageSize', size.toString());
    return this.http.get<PaginatedResponse<Branch>>(`${environment.API_URL}${Constants.API_END_POINT.BRANCHES}/page`, { params: params });
  }

  setPaginatedBranchesSubject(page: number = 0, size: number = 10) {

    const paginatedBranchesSubscription = this.getPaginatedBranches(page, size).
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

  getAllBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${environment.API_URL}${Constants.API_END_POINT.BRANCHES}`)
  }

  setBranchesSubject() {
    const subscription = this.getAllBranches().
      subscribe({
        next: (branches) => {
          this.branches.next(branches);
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
  
  ngOnDestroy() {

    if (this.paginatedBranchesSubscription) {
      this.branchesSubscription.unsubscribe();
    }

    if (this.branchesSubscription) {
      this.branchesSubscription.unsubscribe();
    }

  }
}

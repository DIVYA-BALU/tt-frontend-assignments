import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
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

  private branches: BehaviorSubject<Branch[]> = new BehaviorSubject<Branch[]>([]);
  public branches$: Observable<Branch[]> = this.branches.asObservable();
  private paginatedBranchesSubscription: Subscription = new Subscription;
  private branchesSubscription: Subscription = new Subscription;

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
    this.paginatedBranchesSubscription = this.getPaginatedBranches(page, size).subscribe({
      next: (paginatedBranches) => this.paginatedBranches.next(paginatedBranches)
    });
  }

  getAllBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${environment.API_URL}${Constants.API_END_POINT.BRANCHES}`)
  }

  setBranchesSubject() {
    this.branchesSubscription = this.getAllBranches().subscribe({
      next: (branches) => this.branches.next(branches)
    });
  }

  unSubscribeAll() {
    if (this.branchesSubscription) {
      this.branchesSubscription.unsubscribe();
    }

    if (this.paginatedBranchesSubscription) {
      this.paginatedBranchesSubscription.unsubscribe();
    }
  }
}
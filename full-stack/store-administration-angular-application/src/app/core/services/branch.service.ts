import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch, NewBranch, PaginatedResponse } from '../models/API.model';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }

  saveBranch(newbranch: NewBranch): Observable<Branch> {
    return this.http.post<Branch>(
      `${environment.API_URL}${Constants.API_END_POINT.BRANCHES}`,
      newbranch
    ).pipe(catchError((error) => {
      return throwError(() => error);
    })
    );
  }

  getPaginationBranches(): Observable<PaginatedResponse<Branch>> {
    return this.http.get<PaginatedResponse<Branch>>(`${environment.API_URL}${Constants.API_END_POINT.BRANCHES}/page`).
      pipe(catchError((error) => {
        return throwError(() => error);
      })
      );
  }

  getAllBranches(){
    return this.http.get<Branch[]>(`${environment.API_URL}${Constants.API_END_POINT.BRANCHES}`)
  }  

  addSection(branchId: string, sectionId: string): Observable<Branch> {
    const params = new HttpParams().set('sectionId', sectionId);
    return this.http.post<Branch>(`${environment.API_URL}${Constants.API_END_POINT.ADD_BRANCH_SECTION(branchId)}`, { params: params })
  }
}

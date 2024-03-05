import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse, PaginatedResponse, Role, User, UserDetails } from '../models/API.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private loginResponseSubject: BehaviorSubject<LoginResponse> = new BehaviorSubject<LoginResponse>(new LoginResponse("", [], "", "", new Role("", "", []), []));
  private paginatedUsers: BehaviorSubject<PaginatedResponse<UserDetails>> = new BehaviorSubject<PaginatedResponse<UserDetails>>({
    content: [],
    pageable: {
      pageNumber: 0,
      pageSize: 10
    },
    totalPages: 0,
    totalElements: 0
  });
  public paginatedUsers$: Observable<PaginatedResponse<UserDetails>> = this.paginatedUsers.asObservable();

  constructor(private http: HttpClient) {
  }

  setLoginResponseSubject(loginResponse: LoginResponse) {
    this.loginResponseSubject.next(loginResponse);
  }

  getLoginResponseSubject(): BehaviorSubject<LoginResponse> {
    return this.loginResponseSubject;
  }

  getPaginatedUserDetails(branchId: string, page: number, size: number): Observable<PaginatedResponse<UserDetails>> {
    const params = new HttpParams()
      .set('pageNo', page.toString())
      .set('pageSize', size.toString())
      .set('branchId', branchId);
    return this.http.get<PaginatedResponse<UserDetails>>(`${environment.API_URL}${Constants.API_END_POINT.USERS}`, { params: params });
  }

  setPaginatedUsersSubject(branchId: string, page: number, size: number) {
    this.getPaginatedUserDetails(branchId, page, size).
      subscribe({
        next: (paginatedUsers) => {
          this.paginatedUsers.next(paginatedUsers);
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
}
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

  getPaginatedUserDetails(page: number, size: number, branchId: string, searchByName: string): Observable<PaginatedResponse<UserDetails>> {
    const params = new HttpParams()
      .set('pageNo', page.toString())
      .set('pageSize', size.toString())
      .set('branchId', branchId)
      .set('searchByName', searchByName);      
    return this.http.get<PaginatedResponse<UserDetails>>(`${environment.API_URL}${Constants.API_END_POINT.USERS}`, { params: params });
  }

  setPaginatedUsersSubject(page: number = 0, size: number = 10, branchId: string = '', searchByName: string = '') {
    this.getPaginatedUserDetails(page, size, branchId, searchByName).
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
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { LoginResponse, PaginatedResponse, Role, User, UserDetails } from '../models/API.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private loginResponseSubject: BehaviorSubject<LoginResponse> = new BehaviorSubject<LoginResponse>(new LoginResponse("", [], "", "", new Role("", "", []), []));
  public loginResponseSubject$: Observable<LoginResponse> = this.loginResponseSubject.asObservable();
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
  private paginatedUsersSubscription: Subscription = new Subscription;

  constructor(private http: HttpClient) {
  }

  setLoginResponseSubject(loginResponse: LoginResponse) {
    this.loginResponseSubject.next(loginResponse);
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
    this.paginatedUsersSubscription = this.getPaginatedUserDetails(page, size, branchId, searchByName)
      .subscribe((paginatedUsers) => {
        this.paginatedUsers.next(paginatedUsers);
      });
  }

  updateUser(userDetails: UserDetails): Observable<User> {
    return this.http.put<User>(`${environment.API_URL}${Constants.API_END_POINT.USERS}`, userDetails);
  }

  unSubscribeAll() {
    if (this.paginatedUsersSubscription)
      this.paginatedUsersSubscription.unsubscribe();
  }
}
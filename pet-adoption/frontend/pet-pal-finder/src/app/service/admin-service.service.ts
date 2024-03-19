import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MonthWiseRevenue, UserListDto, YearWiseRevenue } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.baseUrl;

  getUserList(email: string, role :string, page:number, pageSize:number) {
    return this.http.get<UserListDto>(
      `${this.baseUrl}admin/users?email=${email}&role=${role}&page=${page}&size=${pageSize}`
    );
  }

  getMonthWiseRevenue(year:number) {
    return this.http.get<MonthWiseRevenue[]>(
      `${this.baseUrl}admin/year?year=${year}`
    );
  }
  
  getYearWiseRevenue() {
    return this.http.get<YearWiseRevenue[]>(
      `${this.baseUrl}admin/revenue`
    );
  }

}

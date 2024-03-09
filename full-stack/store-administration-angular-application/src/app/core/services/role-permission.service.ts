import { Injectable } from '@angular/core';
import { Permission, Role } from '../models/API.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolePermissionService {

  constructor(private http: HttpClient) { }

  getAllPermissions(): Observable<Permission[]>{
    return this.http.get<Permission[]>(`${environment.API_URL}${Constants.API_END_POINT.PERMISSIONS}`);
  }
  
  getAllRoles(): Observable<Role[]>{
    return this.http.get<Role[]>(`${environment.API_URL}${Constants.API_END_POINT.ROLES}`);
  }
}

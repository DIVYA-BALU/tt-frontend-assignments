import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  permissions!: any;
  constructor(private http: HttpClient, private cookies: CookieService) {
    if (this.cookies.get('isLogged') === "true")
      this.getPermission().subscribe({
        next: (data) => {
          localStorage.setItem('permissions', JSON.stringify(data));
          this.permissions = localStorage.getItem('permissions');
        }
      })
  }

  getPermission(): Observable<any> {
    return this.http.get<any>(environment.permUrl + `/getPermissions/${sessionStorage.getItem('role')}`);
  }
}

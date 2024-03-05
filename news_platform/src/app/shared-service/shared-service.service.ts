import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Authority } from '../model/Authority';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loginStatusData = this.loginStatus.asObservable();

  permissions: BehaviorSubject<Authority[]> = new BehaviorSubject<Authority[]>(
    []
  );
  permissionsData = this.permissions.asObservable();

  constructor() {
    this.setLogin();
    this.setLogout();
    this.setPermission();
  }

  setLogin() {
    if (this.hasToken()) {
      this.loginStatus.next(true);
    }
  }

  setLogout() {
    if (!this.hasToken()) {
      this.loginStatus.next(false);
    }
  }

  setPermission() {
    const permissions = localStorage.getItem('Permission');
    if (permissions != null) {
      this.permissions.next(JSON.parse(permissions));
    }
  }

  hasToken() {
    return localStorage.getItem('accessToken');
  }
}

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

  searchValue: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchValueData = this.searchValue.asObservable();

  badgeValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  badgeValueData$ = this.badgeValue.asObservable();

  subscribedValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  subscribedValueData$ = this.subscribedValue.asObservable();

  constructor() {
    this.setLogin();
    this.setLogout();
    this.setPermission();
    this.setSubscribed();
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

  setSearchValue(value: string) {
    this.searchValue.next(value);
  }

  setBadge(val: boolean) {
    this.badgeValue.next(val);
  }

  isSubscribed() {
    const storedDateString = localStorage.getItem('suscribedEndDate');
    const subscribed = localStorage.getItem('subscribed');

    if (subscribed === 'false') {
      return false;
    } else {
      if (storedDateString) {
        const today = new Date();
        const endDate = new Date(JSON.parse(storedDateString));
        if (endDate < today) {
          return false;
        }
      }
    }
    return true;
  }

  setSubscribed() {
    if (this.isSubscribed()) {
      this.subscribedValue.next(true);
    } else {
      this.subscribedValue.next(false);
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  permissions;

  constructor() { }

  getPermissions() {
    this.permissions = localStorage.getItem('permissions');
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { authority } from './models/authority';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  write: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  writeValue$ = this.write.asObservable();

  edit: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  editValue$ = this.edit.asObservable();

  delete: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  deleteValue$ = this.delete.asObservable();

  authorities: authority[] = [];

  constructor(private loginService: LoginService) {
    if (loginService.isAuthenticated()) {
      this.getPermission();
    }
  }

  getPermission() {
    const authority = localStorage.getItem('authorities');
    if (authority !== null) {
      this.authorities = JSON.parse(authority);
    }

    this.authorities.some((data) => {
      if (data.authority === 'WRITE') {
        this.write.next(true);
      }
    });

    this.authorities.some((data) => {
      if(data.authority === 'EDIT'){
        this.edit.next(true);
      }
    });

    this.authorities.some((data) => {
      if(data.authority === 'DELETE'){
        this.delete.next(true);
      }
    })
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginResponse, Role } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private loginResponseSubject: BehaviorSubject<LoginResponse> =  new BehaviorSubject<LoginResponse>(new LoginResponse("",[],"","",new Role("","",[]),[]));
  constructor() { }

  setLoginResponseSubject(loginResponse : LoginResponse){
    this.loginResponseSubject.next(loginResponse);
  }

  getLoginResponseSubject(): BehaviorSubject<LoginResponse>{
    return this.loginResponseSubject;
  }
}

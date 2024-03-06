import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../model/login-response';
import { Register } from '../model/register';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl =  environment.loginUrl;
  userUrl = environment.userUrl;

  isLoggedin:boolean = false;

  loginStatus = new BehaviorSubject<boolean>(false);
  userRole = new BehaviorSubject<string>('');

  constructor(private http:HttpClient) {
    this.getLoginStatus();
    this.getRole();
   }

  login(email:string, password:string) : Observable<LoginResponse> {
    const body = {email,password}    
    return this.http.post<LoginResponse>(this.loginUrl,body);
  }

  loggedin(status:boolean, token:string): void {

    if(status) {
    this.isLoggedin = true;
    this.loginStatus.next(this.isLoggedin);
    localStorage.setItem("isloggedin","true")
    localStorage.setItem("accessToken", token)
    }else {
      this.isLoggedin = false;
      localStorage.setItem('isLoggedin', 'false');
    }

  }


  getUser(){
   this.http.get<User>(this.userUrl).subscribe(
    (response) => {
      this.userRole.next(response.role.role);
    }
   );
  }

  getRole () {
    this.getUser();
    return this.userRole.asObservable();
  }

  isAuthenticated():boolean {
    return localStorage.getItem("isloggedin") === "true";
  }
  
  getLoginStatus() {
      this.loginStatus.next(this.isAuthenticated());      
      return this.loginStatus.asObservable();
  }

  logout() {
    this.isLoggedin = false;
    localStorage.clear();
  }
}

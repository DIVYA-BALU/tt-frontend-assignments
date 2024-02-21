import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string = environment.backendBaseUrl;
  isLoggedIn: boolean = this.cookieService.get("logged_in") === "true";

  constructor(private http: HttpClient, private router:Router, private cookieService: CookieService) {
    // cookieService.deleteAll();
   }

  //  COOKIE
   loginUser(username: string, password: string): Observable<HttpResponse<LoginResponse>> {
    const body = { username, password };
    let response:Observable<any> = this.http.post<any>(`${this.url}/auth/login`, body, {observe:'response'});
    console.log(response);
    return response;
  }



  // LOCAL STORAGE
  // loginUser(username: string, password: string): Observable<LoginResponse> {
  //   const body = { username, password };
  //   let response:Observable<LoginResponse> = this.http.post<any>(`${this.url}/auth/login`, body);
  //   console.log(response);
  //   localStorage.setItem("logged_in","true");
  //   this.isLoggedIn = true;
  //   this.router.navigate(['first-component']); //cannot send it to a lazy load componenet

  //   return response;
  // }

  //HARD CODE
  // login (username: string, password: string) : boolean{
  //   if(username === 'admin' && password === 'admin'){
  //     this.isLoggedIn = true;
  //     localStorage.setItem('LoggedIn','YES')
  //     return true;
  //   }
  //   localStorage.setItem('LoggedIn','NO')
  //   return false;
  // }

  isAuthenticated() :boolean{
    console.log( "LOGIN STATUS",this.isLoggedIn);
    
    return this.isLoggedIn;
  }
}

interface LoginResponse {
  // change login response from backend
  user: {
    "userId": number,
    "username": string,
    "password": string,
    "authorities": [
        {
            "roleId": number,
            "authority": string
        },
        // {
        //     "roleId": number,
        //     "authority": string
        // }
    ],
    "fullName": string,
    "email": string,
    "phoneNumber": string,
    "enabled": boolean,
    "accountNonExpired": boolean,
    "credentialsNonExpired": boolean,
    "accountNonLocked": boolean
},
  jwt: string;
}


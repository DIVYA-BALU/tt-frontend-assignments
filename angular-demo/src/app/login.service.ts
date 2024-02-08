import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl:string = environment.baseUrl;
  isLoggedIn:boolean;
  constructor(private http: HttpClient,private router:Router, private cookieService:CookieService) {
    // this.isLoggedIn = localStorage.getItem("logged_in") === "true";
    this.isLoggedIn = cookieService.get("logged_in") === "true";
    // cookieService.deleteAll();
  }
  
  
  // loginUser(name:string, password:string): Observable<any> {
  //   console.log(this.isLoggedIn);
  //   this.cookieService.set("logged_in","true");
  //   const body = {name,password}
  //   console.log(body);
  //   const tk:Observable<any> = this.http.post<any>(this.baseUrl,body,{observe:'response'});
  //   // console.log(tk.status);
  //   // console.log(tk.body);
  //   // console.log(tk.ok);
    
  //   console.log("tk",tk);
  //   localStorage.setItem("logged_in","true");
  //   this.isLoggedIn=true;
  //   this.router.navigate(['app-dashbord']);
  //   return tk;
  // }

  //cookie
  loginUser(name:string, password:string): Observable<any> {
    console.log(this.isLoggedIn);
    const body = {name,password}
    console.log(body);
    const tk:Observable<any> = this.http.post<any>(this.baseUrl,body,{observe:'response'});
    console.log("tk",tk);
    this.cookieService.set("logged_in","true");
    // this.isLoggedIn=true;
    // this.router.navigate(['app-dashbord']);
    return tk;
  }

  login (token: string) : boolean{
      this.isLoggedIn = true;
      this.cookieService.set("token",token);
      // localStorage.setItem("token",token);
      return true;
   
  }
 
  isAuthenticated() :boolean{
    return this.isLoggedIn;
  }

}

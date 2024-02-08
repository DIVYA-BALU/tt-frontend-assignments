import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userIdSubject = new BehaviorSubject<string>("");
  sharedUserId$ = this.userIdSubject.asObservable();
  
  private baseUrl:string = environment.baseUrl;
  isLoggedIn:boolean;
  constructor(private http: HttpClient,private router:Router) {
    this.isLoggedIn = localStorage.getItem("logged_in") === "true";

  }
  
  
  loginUser(name:string, password:string): Observable<any> {
    console.log(this.isLoggedIn);
    const body = {name,password}
    console.log(body);
    const tk:Observable<any> = this.http.post<any>(`${this.baseUrl}/api/auth`,body,{observe:'response'});
    // console.log(tk.status);
    // console.log(tk.body);
    // console.log(tk.ok);
    
    console.log("tk",tk);
    localStorage.setItem("logged_in","true");
    this.isLoggedIn=true;
    return tk;
  }

  

  login (token: string) : boolean{
      this.isLoggedIn = true;
      localStorage.setItem("token",token);
      return true;
   
  }
 
  isAuthenticated() :boolean{
    return this.isLoggedIn;
  }

  setUserId(token:string){
    const tokenInfo:any = jwtDecode(token);
    const role:String =  tokenInfo.role[0].authority;
    console.log(tokenInfo.id);
    this.userIdSubject.next(tokenInfo.id);
  }

}

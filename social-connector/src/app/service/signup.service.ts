import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl:string = environment.baseUrl + "/register";
  isLoggedIn:boolean;
  constructor(private http: HttpClient,private router:Router) {
    this.isLoggedIn = localStorage.getItem("logged_in") === "true";

  }
  
  
  signUpUser(name:string, email:string, password:string): Observable<any> {
    console.log(this.isLoggedIn);
    const body = {name,email,password}
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

  

  sigUp (token: string) : boolean{
      this.isLoggedIn = true;
      localStorage.setItem("token",token);
      return true;
   
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private loginUrl : string = '';
  private getAccountDetailsUrl : string = '';
  private getUserDetailsUrl:  string = '';
  response : any = '';
 
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.loginUrl = `${environment.loginUrl}`;
  }
 
  authenticate(body : object){
    this.response = this.http.post<any>(this.loginUrl, body, {observe : 'response'});
    return this.response;
  }   

  DecodeToken(token: any): any {
    return jwtDecode(token);
  }
    
  isAuthenticated() : boolean{
    if(localStorage.getItem('isLogin') === 'true'){
      return true;
    }
    else{
      return false;
    }
  }

  getAccountDetails(userName : string) : any{
    this.getAccountDetailsUrl = `${environment.getAccountDetailsUrl}/${userName}`;
    return this.http.get<any>(this.getAccountDetailsUrl, { observe : 'response' });
  }

  getUserDetails(userName: string) : any{
    this.getUserDetailsUrl = `${environment.getUserDetailsUrl}/${userName}`;
    return this.http.get<any>(this.getUserDetailsUrl, { observe : 'response'});
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }





}

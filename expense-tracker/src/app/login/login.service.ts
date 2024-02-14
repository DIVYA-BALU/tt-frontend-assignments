import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private loginUrl : string = '';
  private getAccountDetailsUrl : string = '';
  token : any = '';
 
  constructor(private http: HttpClient) {
    this.loginUrl = `${environment.loginUrl}`
  }
 
  authenticate(userName: string, password: string){
    const body = { userName, password }
    this.token = this.http.post<any>(this.loginUrl, body, {observe : 'response'});
    return this.token;
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
}

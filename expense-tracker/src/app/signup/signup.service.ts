import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private registerUrl : string = '';
  token : any = '';

  constructor(private http: HttpClient) {
    this.registerUrl = `${environment.registerUrl}`
  }

  registerUser(userName: string, email : string, password: string, role: any){
    const body = {
      userName,
      email,
      password
    }
    return this.token = this.http.post<any>(this.registerUrl, body);
  }
}

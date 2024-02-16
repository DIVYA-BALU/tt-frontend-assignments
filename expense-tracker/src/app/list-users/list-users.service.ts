import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private htttp : HttpClient) { }

  getUsers(userName : string){
    return this.htttp.get<any>(`${environment.getUserDetailsUrl}/${userName}`, { observe : 'response'});
  }
  
  getAllUsers(){
    return this.htttp.get<any>(`${environment.getAccountDetailsUrl} `, { observe : 'response'});
  }
}

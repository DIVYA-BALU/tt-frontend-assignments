import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
export interface register {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    role: string
}
@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    loggedStatus: boolean = false;
    constructor(private http: HttpClient) {
    }

    register(data: register): Observable<any> {
        const response: any = this.http.post<any>(environment.baseUrl + "/register", data, { observe: 'response' });
        return response;
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    loggedStatus: boolean = false;
    constructor(private http: HttpClient) {
    }

    register(firstname: string, lastname: string, email: string, password: string, role: string): Observable<any> {
        const body = { firstname, lastname, email, password, role };
        console.log(body);
        const tk: any = this.http.post<any>(environment.baseUrl + "/register", body, { observe: 'response' });
        return tk;
    }

}

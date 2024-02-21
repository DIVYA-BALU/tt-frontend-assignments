import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    constructor(private http: HttpClient) {
    }

    getAllDoctors(page: number, size: number): Observable<any> {
        const params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());
        return this.http.get<any>(environment.docUrl + "/getAll", { params });
    }

    // getAllDoctors(): Observable<any> {
    //     return this.http.get<any>(environment.docUrl + "/getAll");
    // }
}

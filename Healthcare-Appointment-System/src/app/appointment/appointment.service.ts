import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) { }
  getAppointment(patient: boolean, id: string, page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (patient || sessionStorage.getItem('role') === 'PATIENT')
      return this.http.get<any>(environment.patUrl + `/appointment/${patient ? id : sessionStorage.getItem('id')}`, { params });
    else if (sessionStorage.getItem('role') === 'DOCTOR')
      return this.http.get<any>(environment.docUrl + `/appointmentDetails/${sessionStorage.getItem('id')}`);
    else if (sessionStorage.getItem('role') === 'ADMIN')
      return this.http.get<any>(environment.appUrl + `/getAll`, { params });
    else
      return this.http.get<any>(environment.recepUrl + `/getAllAppointments`, { params });

  }
}

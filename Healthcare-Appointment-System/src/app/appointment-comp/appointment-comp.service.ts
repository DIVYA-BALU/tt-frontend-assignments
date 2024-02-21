import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AppointmentCompService {
  constructor(private http: HttpClient) { }
  appointment: any = '';

  save(details: any): Observable<any> {
    this.appointment = {
      doctor: { doctorId: details.doctorId },
      doctorName: details.doctorName,
      patient: { patientId: details.patientId },
      patientName: details.patientName,
      time: details.time,
    };
    return this.http.post<any>(environment.appUrl + `/book`, this.appointment);
  }

  update(details: any): Observable<any> {
    this.appointment = {
      doctor: { doctorId: details.doctorId },
      doctorName: details.doctorName,
      patient: {
        patientId: details.patientId,
      },
      patientName: details.patientName,
      time: details.time,
    };
    return this.http.put<any>(
      environment.appUrl + `/updateById/${details.appointmentId}`,
      this.appointment
    );
  }

}

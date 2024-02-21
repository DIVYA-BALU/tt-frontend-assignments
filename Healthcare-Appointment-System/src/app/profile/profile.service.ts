import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) { }
  doctor: any;
  patient: any;
  receptionist: any;
  admin: any;
  save(user: any): Observable<any> {
    if (sessionStorage.getItem('role') === 'DOCTOR') {
      this.doctor = {
        doctorFristName: user.firstname,
        doctorLastName: user.lastname,
        doctorEmail: user.email,
        specialization: user.specialization,
        inTime: user.inTime,
        outTime: user.outTime,
      };
      return this.http.put<any>(environment.docUrl + `/update/${sessionStorage.getItem('id')}`, this.doctor);
    } else if (sessionStorage.getItem('role') === 'PATIENT') {
      this.patient = {
        patientFirstName: user.firstname,
        patientLastName: user.lastname,
        patientEmail: user.email,
        patientContact: user.phoneno,
      };
      return this.http.put<any>(environment.patUrl + `/update/${sessionStorage.getItem('id')}`, this.patient);
    } else if (sessionStorage.getItem('role') === 'RECEPTIONIST') {
      this.receptionist = {
        receptionistFristName: user.firstname,
        receptionistLastName: user.lastname,
        receptionistEmail: user.email,
      };
      return this.http.put<any>(environment.recepUrl + `/update/${sessionStorage.getItem('id')}`, this.receptionist);
    } else {
      this.admin = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phoneno: user.phoneno,
      };
      return this.http.put<any>(environment.userUrl + `/update/${user.id}`, this.admin);
    }
  }
}

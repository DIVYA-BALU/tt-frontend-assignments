import { Injectable } from '@angular/core';
import { AppointmentStatus, AppointmentStatusDto, AppointmentUpdate, StatusMessage, VeterinaryDoctor } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryDoctorService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getNearByDoctors(name:string,city:string,page:number){
    return this.http.get<VeterinaryDoctor[]>(
      `${this.baseUrl}veterinary-doctor/all?name=${name}&city=${city}&page=${page}`
    );
  }

  requestAppointment(appoinment:AppointmentStatus){
    return this.http.post<StatusMessage>(
      `${this.baseUrl}appointment`,appoinment
    );
  }

  getRequestStatus(id:string){
    return this.http.get<AppointmentStatus[]>(
      `${this.baseUrl}appointment?id=${id}`
    );
  }

  getReceivedRequest(id:string,status:string){
    console.log(status);
    
    return this.http.get<AppointmentStatusDto[]>(
      `${this.baseUrl}appointment/doctor?id=${id}&status=${status}`
    );
  }

  getAcceptedRequest(id:string){
    return this.http.get<AppointmentStatusDto[]>(
      `${this.baseUrl}appointment/accepted?id=${id}`
    );
  }

  updateAppointment(appoinment:AppointmentUpdate){
    return this.http.put<StatusMessage>(
      `${this.baseUrl}appointment`,appoinment
    );
  }

  getSearchInput(field:string,value:string){
    return this.http.get<string[]>(
      `${this.baseUrl}veterinary-doctor/search?field=${field}&value=${value}`
    );
  }
}

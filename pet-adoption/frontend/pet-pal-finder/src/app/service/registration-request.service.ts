import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Organization, StatusMessage, VeterinaryDoctor, StatusUpdate } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RegistrationRequestService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  viweRequestedOrganization(){
    return this.http.get<Organization[]>(
      `${this.baseUrl}organization`
    );
  }
  viweRequestedVeterinaryDoctor(){
    return this.http.get<VeterinaryDoctor[]>(
      `${this.baseUrl}veterinary-doctor`
    );
  }

  updateStatusForOrganization(status:StatusUpdate){
    return this.http.put<StatusMessage>(
      `${this.baseUrl}organization`,status
    );
  }

  updateStatusForVeterinaryDoctor(status:StatusUpdate){
    return this.http.put<StatusMessage>(
      `${this.baseUrl}veterinary-doctor`,status
    );
  }
}

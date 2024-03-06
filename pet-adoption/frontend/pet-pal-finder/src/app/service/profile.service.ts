import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Adopter, Organization, VeterinaryDoctor } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl: string = environment.baseUrl;
  id: string = '';
  a: Adopter = {
    _id: '',
    name: '',
    email: '',
    profilePhoto: '',
    occupation: '',
    location: {
      doorNo: '',
      street: '',
      city: '',
      district: '',
      state: '',
      country: '',
    },
    contactNumber: 0,
    dob: new Date(),
  };
  private userSubject: BehaviorSubject<
    Adopter | Organization | VeterinaryDoctor
  > = new BehaviorSubject<Adopter | Organization | VeterinaryDoctor>({
    _id: '',
    name: '',
    email: '',
    profilePhoto: '',
    occupation: '',
    location: {
      doorNo: '',
      street: '',
      city: '',
      district: '',
      state: '',
      country: '',
    },
    contactNumber: 0,
    dob: new Date(),
  });

  sharedUser$: Observable<Adopter | Organization | VeterinaryDoctor> =
    this.userSubject.asObservable();

  constructor(private authService: AuthService, private http: HttpClient) {}

  getAdopterProfile(id: string) {
    return this.http.get<Adopter>(`${this.baseUrl}adopter?id=${id}`);
  }

  getVeterinaryDoctorProfile(id: string) {
    console.log(id,"service");
    
    return this.http.get<VeterinaryDoctor>(
      `${this.baseUrl}veterinary-doctor/profile/${id}`
    );
  }

  getOrganizationProfile(id: string) {
    return this.http.get<any>(`${this.baseUrl}organization/detail?id=${id}`);
  }
  
  setUser(user:Adopter | VeterinaryDoctor | Organization){
    this.userSubject.next(user);
  }

  updateAdopterProfile(formData:FormData){
    return this.http.put<any>(`${this.baseUrl}adopter`,formData);
  }

  updateVeterinaryDoctorProfile(formData:FormData){
    return this.http.put<any>(`${this.baseUrl}veterinary-doctor/update`, formData);
  }
  updateOrganizationProfile(formData:FormData){
    return this.http.put<any>(`${this.baseUrl}organization/update`, formData);
  }
}

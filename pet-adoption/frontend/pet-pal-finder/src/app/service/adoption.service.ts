import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdoptionDetail, AdoptionDetailDto, PetPost, StatusMessage } from '../models/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  requestAdoption(adoption:AdoptionDetailDto){
    return this.http.post<StatusMessage>(
      `${this.baseUrl}adoption-details`,adoption
    );
  }

  getAdoptionStatus(id:String){
    return this.http.get<AdoptionDetail[]>(
      `${this.baseUrl}adoption-details?id=${id}`
    );
  }

  getAdoptionStatusOfPoster(id:string,status:string,page:number){
    return this.http.get<AdoptionDetail[]>(
      `${this.baseUrl}adoption-details/poster?id=${id}&status=${status}&page=${page}`
    );
  }

  updateAdoptionStatus(id:string,status:String){
    return this.http.put<AdoptionDetail[]>(
      `${this.baseUrl}adoption-details`,{id,status}
    );
  }
}

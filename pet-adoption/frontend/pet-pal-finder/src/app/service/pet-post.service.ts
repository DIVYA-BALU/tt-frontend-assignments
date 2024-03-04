import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Location, PetPost } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PetPostService {

  private baseUrl: string = environment.baseUrl;
  id: string = '';
  constructor(private authService:AuthService,private http: HttpClient) { 
    authService.sharedId$.subscribe({next:(id)=>{
      this.id = id;
    }})
  }

  getAnimalPostById(){
    return this.http.get<PetPost[]>(
      `${this.baseUrl}pet-post/poster?posterId=${this.id}`
    );
  }

  savePetPost(formData:FormData){
    formData.append("posterId",this.id);
    return this.http.post<PetPost>(
      `${this.baseUrl}pet-post`,formData
    );
  }

  getNearByPet(location:Location){
    console.log(location);
    
    return this.http.post<any>(
      `${this.baseUrl}pet-post/near-by-post`,location
    );
  }

  getLatestPost(){
    return this.http.get<PetPost[]>(
      `${this.baseUrl}pet-post/latest`,
    );
  }

  getPetPost(id:string){
    return this.http.get<PetPost>(
      `${this.baseUrl}pet-post?id=${id}`,
    );
  }
}

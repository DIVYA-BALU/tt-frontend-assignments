import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PetPost } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  categorySearchInput(value:string){
    return this.http.get<string[]>(
      `${this.baseUrl}pet-post/search-input/category?value=${value}`
    );
  }

  breadSearchInput(category:string,breed:string){
    return this.http.get<string[]>(
      `${this.baseUrl}pet-post/search-input/breed?category=${category}&breed=${breed}`
    );
  }

  citySearchInput(city:string){
    return this.http.get<string[]>(
      `${this.baseUrl}organization/search-city?city=${city}`
    );
  }

  searchedPets(category: string, breed: string, gender: string, isInfected: string, city: string, page: number){
    return this.http.get<PetPost[]>(
      `${this.baseUrl}pet-post/search-input/search?category=${category}&breed=${breed}&gender=${gender}&isInfected=${isInfected}&city=${city}&page=${page}&`
    );
  }
}

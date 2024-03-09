import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rating, StatusMessage } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

 
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addRating(rating:Rating){
    return this.http.post<StatusMessage>(
      `${this.baseUrl}rating`,rating
    );
  }
}

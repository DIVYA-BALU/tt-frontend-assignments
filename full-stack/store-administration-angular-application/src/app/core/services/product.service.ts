import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { Product } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProducts(products: Product[]): Observable<Product[]>{
    return this.http.post<Product[]>(`${environment.API_URL}${Constants.API_END_POINT.PRODUCTS}`, products)

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = "http://localhost:8080/product/getAll";
  addproductUrl = "http://localhost:8080/product/save";
  updateproductUrl = "http://localhost:8080/product/update";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  addProduct(request: Product): Observable<any> {
    // console.log(request);
    return this.http.post<Product>(this.addproductUrl, request);
  }

  updateProduct(request: Product): Observable<Product> {
    // console.log(request);
    return this.http.put<Product>(this.updateproductUrl, request);
  }

}

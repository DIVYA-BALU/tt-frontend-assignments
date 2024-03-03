import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { PaginatedResponse, Product } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private paginatedProducts: BehaviorSubject<PaginatedResponse<Product>> = new BehaviorSubject<PaginatedResponse<Product>>({
    content: [],
    pageable: {
      pageNumber: 0,
      pageSize: 10
    },
    totalPages: 0,
    totalElements: 0
  });

  public paginatedProducts$: Observable<PaginatedResponse<Product>> = this.paginatedProducts.asObservable();

  constructor(private http: HttpClient) {
   this.setPaginatedProductsSubject();
  }

  saveProducts(products: Product[]): Observable<Product[]> {
    return this.http.post<Product[]>(`${environment.API_URL}${Constants.API_END_POINT.PRODUCTS}`, products)
  }

  setPaginatedProductsSubject() {
    this.getPaginatedProducts().
      subscribe({
        next: (paginatedSections) => {
          this.paginatedProducts.next(paginatedSections);
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404)
            alert('Unable to connect to the server');
          else
            alert(`${error.status} found`);
        }
      });
  }

  getPaginatedProducts(): Observable<PaginatedResponse<Product>> {
    return this.http.get<PaginatedResponse<Product>>(`${environment.API_URL}${Constants.API_END_POINT.PRODUCTS}/page`);
  }
}

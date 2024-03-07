import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
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

  private subscription: Subscription = new Subscription;
  public paginatedProducts$: Observable<PaginatedResponse<Product>> = this.paginatedProducts.asObservable();

  constructor(private http: HttpClient) {
  }

  saveProducts(products: Product[]): Observable<Product[]> {
    return this.http.post<Product[]>(`${environment.API_URL}${Constants.API_END_POINT.PRODUCTS}`, products)
  }

  setPaginatedProductsSubject(page: number = 0, size: number = 10, searchByName: string = '', branchId: string = '', sectionId: string = '') {
    this.getPaginatedProducts(page, size, searchByName, branchId, sectionId).
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

  getPaginatedProducts(page: number, size: number, searchByName: string, branchId: string, sectionId: string): Observable<PaginatedResponse<Product>> {
    const params = new HttpParams()
      .set('pageNo', page.toString())
      .set('pageSize', size.toString())
      .set('searchByName', searchByName)
      .set('branchId', branchId)
      .set('sectionId', sectionId);
    return this.http.get<PaginatedResponse<Product>>(`${environment.API_URL}${Constants.API_END_POINT.PRODUCTS}/page`, { params: params });
  }
}

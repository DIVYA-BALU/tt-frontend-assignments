import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/Constants';
import { PaginatedResponse, Product } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private paginatedProducts: Subject<PaginatedResponse<Product>> = new Subject<PaginatedResponse<Product>>();

  branchId: string = '';
  sectionId: string = '';

  public paginatedProducts$: Observable<PaginatedResponse<Product>> = this.paginatedProducts.asObservable();
  private paginatedProductsSubscription: Subscription = new Subscription;

  constructor(private http: HttpClient) {
  }

  saveProducts(products: Product[]): Observable<Product[]> {
    return this.http.post<Product[]>(`${environment.API_URL}${Constants.API_END_POINT.PRODUCTS}`, products)
  }

  setPaginatedProductsSubject(page: number = 0, size: number = 10, searchByName: string = '', branchId: string = '', sectionId: string = '') {
    this.paginatedProductsSubscription = this.getPaginatedProducts(page, size, searchByName, branchId, sectionId)
      .subscribe((paginatedProducts) => {
        this.paginatedProducts.next(paginatedProducts);
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

  unSubscribeAll() {
    if (this.paginatedProductsSubscription) {
      this.paginatedProductsSubscription.unsubscribe();
    }
  }
}

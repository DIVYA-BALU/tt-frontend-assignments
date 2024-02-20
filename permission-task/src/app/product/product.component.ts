import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products: Product[] = [];

  isShowAdd: boolean =false;

  constructor(private productService: ProductService, private sharedService: SharedServiceService){ }

  ngOnInit(){
    this.sharedService.value$.subscribe( data => {
      this.isShowAdd = data;
    })

    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
    })
  }
}

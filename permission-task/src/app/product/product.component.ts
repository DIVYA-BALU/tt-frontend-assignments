import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product';
import { SharedServiceService } from '../shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  sub1$: Subscription = new Subscription();
  sub2$: Subscription = new Subscription();
  sub3$: Subscription = new Subscription();

  products: Product[] = [];

  isShowAdd: boolean = false;
  isShowEdit: boolean = false;
  isShowDelete:boolean = false;

  constructor(private productService: ProductService, private sharedService: SharedServiceService){ }

  ngOnInit(){
    this.sub1$ = this.sharedService.writeValue$.subscribe( data => {
      this.isShowAdd = data;
    })

    this.sub2$ = this.sharedService.editValue$.subscribe( data => {
      this.isShowEdit = data;
    })

    this.sub3$ = this.sharedService.deleteValue$.subscribe( data => {
      this.isShowDelete = data;
    })
    
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
    })
  }

  ngDestroy(){
    this.sub1$.unsubscribe();
    this.sub2$.unsubscribe();
    this.sub3$.unsubscribe();
  }
}

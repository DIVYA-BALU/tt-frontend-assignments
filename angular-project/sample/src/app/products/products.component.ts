import { Component, ViewChild } from '@angular/core';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { UpdateproductComponent } from '../updateproduct/updateproduct.component';
import { Product } from '../model/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../services/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  search:string = '';


 deleteProduct(arg0: any) {
   throw new Error('Method not implemented.');
 }

 products: Product[] = [];
 displayedColumns: string[] = [
   'Id',
   'name',
   'price',
   'actions',
 ];
 dataSource = new MatTableDataSource<Product>(this.products);

 @ViewChild(MatPaginator) paginator!: MatPaginator;

 constructor(
   private productService: ProductService,
   public dialog: MatDialog
 ) {
   this.getProducts();
 }

 getProducts() {
   this.productService.getProducts().subscribe((data: Product[]) => {
     this.products = data;
     this.dataSource.data = this.products;
   });
 }
 
 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }

 openAddProductDialog(): void {
   const dialogRef = this.dialog.open(AddproductComponent, {
     width: '500px',
   });

   dialogRef.afterClosed().subscribe(() => {
     this.getProducts();
   });
 }

 openEditProductDialog(product: Product) {
   const dialogRef = this.dialog.open(UpdateproductComponent, {
     width: '500px',
     data: product,
   });

   dialogRef.afterClosed().subscribe(() => {
     this.getProducts();
   });
 }
}

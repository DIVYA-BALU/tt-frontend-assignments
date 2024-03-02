import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Bill, Product } from 'src/app/core/models/API.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductDialogFormComponent } from '../product-dialog-form/product-dialog-form.component';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})

export class ProductLayoutComponent {
  displayedColumns: string[] = ['Serial Number', 'Product Name', 'Branch', 'Section', 'Quantity', 'Price', 'Available Quantity', 'SelectedQuantity'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalProducts: number = 0;
  dataSource: MatTableDataSource<Product>;
  bill: Bill = {
    billItems: [],
    totalPrice: 0
  };

  constructor(private productService: ProductService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Product>;
    this.getProductDetails();
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    //this.getEventDetails();
  }

  getProductDetails() {
    this.productService.paginatedProducts$.subscribe({
      next: (paginatedProducts) => {
        this.dataSource.data = paginatedProducts.content;
      }
    })
  }

  availableQuantities(product: Product): number[] {
    const quantities: number[] = [];

    for (let i = 0; i <= product.availableQuantity; i++) {
      quantities.push(i);
    }

    return quantities;
  }

  addToBill(product: Product, selectedQuantity: string): void {
    const quantity = parseInt(selectedQuantity);

    if (quantity !== 0) {
      const itemIndex = this.bill.billItems.findIndex(item => item.product === product);

      if (itemIndex !== -1) {
        this.bill.billItems[itemIndex].quantity = quantity;
      }
      else {
        this.bill.billItems.push({ product: product, quantity: quantity });
      }

    }
    console.log(this.bill);
    
  }

  openProductDialogForm() {
    const dialogRef = this.dialog.open(ProductDialogFormComponent, { disableClose: true });
  }


}

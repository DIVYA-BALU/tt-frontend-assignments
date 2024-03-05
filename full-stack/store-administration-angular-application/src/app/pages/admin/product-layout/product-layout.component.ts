import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Bill, Product } from 'src/app/core/models/API.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductDialogFormComponent } from '../product-dialog-form/product-dialog-form.component';
import { BillService } from 'src/app/core/services/bill.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { ChangeDetectorRef } from '@angular/core';

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
  makeBillButton: Boolean = false;
  clickedButtons: Set<string> = new Set();
  tempVariable = false;

  constructor(private billService: BillService, private productService: ProductService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource<Product>;
    this.getProductDetails();
  }

  private areArraysEqual(array1: any[], array2: any[]): boolean {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
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

    this.clickedButtons.add(product._id);

    console.log(this.clickedButtons);
    const quantity = parseInt(selectedQuantity);

    const itemIndex = this.bill.billItems.findIndex(item => item.product === product);

    if (itemIndex !== -1) {
      this.bill.billItems[itemIndex].quantity = quantity;
    }

    else if (quantity !== 0) {
      this.bill.billItems.push({ product: product, quantity: quantity });
    }

  }

  openProductDialogForm() {
    const dialogRef = this.dialog.open(ProductDialogFormComponent, { disableClose: true });
  }

  makeBill() {

    if (this.bill.billItems.length === 0) {
      this.dialog.open(PopUpComponent, {
        data: {
          message: 'No products Selected'
        }
      })
    }
    else {
      this.bill.billItems.forEach((item) => {
        this.bill.totalPrice += item.product.price * item.quantity;
      })
      this.billService.saveBill(this.bill).subscribe({
        next: () => {
          this.dialog.open(PopUpComponent, {
            data: {
              message: `Bill Saved Successfully.Please Collect Total Bill Amount: ${this.bill.totalPrice} `,
            },
          });
          this.bill.billItems = [];
          this.bill.totalPrice = 0;
          this.clickedButtons.clear();
        },
        error: () => {
          alert('Error Occured Retry Later');
        },
        complete: () => {
          this.productService.setPaginatedProductsSubject();
        }
      })
    }
  }
}

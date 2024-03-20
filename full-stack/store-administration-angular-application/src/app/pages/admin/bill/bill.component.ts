import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bill, BillItem, Product } from 'src/app/core/models/API.model';
import { BillService } from 'src/app/core/services/bill.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})

export class BillComponent {
  displayedColumns: string[] = ['Serial Number', 'Product Name', 'Price', 'Quantity', 'Total Price', 'Remove'];
  dataSource: MatTableDataSource<BillItem>;
  bill: Bill = new Bill([], 0, '', '');
  currentDate: Date;
  edit: boolean = false;
  private initialBillSubscription: Subscription = new Subscription;
  private billSubscription: Subscription = new Subscription;

  constructor(private billService: BillService, private productService: ProductService) {
    this.currentDate = new Date();
    this.dataSource = new MatTableDataSource<BillItem>();
    this.initialBillSubscription = this.billService.billSubject$.subscribe({
      next: (billSubject) => {
        this.bill = billSubject;
        this.dataSource = new MatTableDataSource<BillItem>(billSubject.billItems);
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
    const bill = this.billService.billSubject.value;

    const quantity = parseInt(selectedQuantity);
    const itemIndex = bill.billItems.findIndex(item => item.product._id === product._id);

    if (itemIndex !== -1) {

      if (quantity === 0) {
        bill.billItems.splice(itemIndex, 1);
      } else {
        bill.billItems[itemIndex].quantity = quantity;
      }

    } else if (quantity !== 0) {
      bill.billItems.push({ product: product, quantity: quantity });
    }

    bill.totalPrice = 0;
    bill.billItems.forEach((item) => {
      bill.totalPrice += item.product.price * item.quantity;
    })

    this.billService.setBillSubject(bill);
  }

  removeProduct(product: Product) {
    const bill = this.billService.billSubject.value;
    const itemIndex = bill.billItems.findIndex(item => item.product._id === product._id);
    bill.billItems.splice(itemIndex, 1);
    bill.totalPrice = 0;
    bill.billItems.forEach((item) => {
      bill.totalPrice += item.product.price * item.quantity;
    })
    this.billService.setBillSubject(bill);
  }

  saveBill() {

    if (this.bill.billItems.length === 0) {
      Swal.fire('No Products Selected');
      return;
    }

    this.billSubscription = this.billService.saveBill(this.bill).subscribe({
      next: () => {
        Swal.fire('Bill Saved');
        this.productService.setPaginatedProductsSubject(0, 10, '', this.productService.branchId, this.productService.sectionId);
        this.billService.setBillSubject(new Bill([], 0, '', ''));
      },
      error: () => {
        Swal.fire('Error Occured Retry Later');
      }
    })
  }

  editButtonClick() {
    this.edit = !this.edit;
  }

  cancelBill() {

    if (this.bill.billItems.length === 0) {
      Swal.fire('No Products Selected');
      return;
    }

    this.billService.setBillSubject(new Bill([], 0, '', ''));
    Swal.fire('Bill Cancelled');
  }

  ngOnDestroy() {

    if (this.initialBillSubscription) {
      this.initialBillSubscription.unsubscribe();
    }

    if (this.billSubscription) {
      this.billSubscription.unsubscribe();
    }

    this.productService.unSubscribeAll();
  }
}

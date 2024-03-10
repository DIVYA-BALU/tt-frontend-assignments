import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Bill, BillItem } from 'src/app/core/models/API.model';
import { BillService } from 'src/app/core/services/bill.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { ProductService } from 'src/app/core/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {
  bill: Bill;
  displayedColumns: string[] = ['Serial Number', 'Product Name', 'Price', 'Quantity', 'Total Price'];
  dataSource: MatTableDataSource<BillItem>;

  private subscription: Subscription = new Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { bill: Bill }, private dialog: MatDialog, private billService: BillService, private productService: ProductService) {
    this.dataSource = new MatTableDataSource<BillItem>(data.bill.billItems);
    this.bill = data.bill;
  }

  saveBill() {
    const subscription = this.billService.saveBill(this.bill).subscribe({
      next: () => {
        this.dialog.open(PopUpComponent, {
          data: {
            message: `Bill Saved Successfully.Please Collect Total Bill Amount: ${this.bill.totalPrice} `,
          },
        });
        this.productService.setPaginatedProductsSubject();
      },
      error: () => {
        alert('Error Occured Retry Later');
      }
    })
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }
}

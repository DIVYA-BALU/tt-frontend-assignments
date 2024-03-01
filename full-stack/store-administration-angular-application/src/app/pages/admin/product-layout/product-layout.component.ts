import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDialogFormComponent } from '../product-dialog-form/product-dialog-form.component';
import { ProductService } from 'src/app/core/services/product.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})

export class ProductLayoutComponent {
  displayedColumns: string[] = ['Product Name', 'Branch', 'Section', 'Quantity', 'Price', 'Available Quantity'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalProducts: number = 0;
  dataSource: MatTableDataSource<null>;

  constructor(private productService: ProductService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<null>;
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    //this.getEventDetails();
  }

  openProductDialogForm() {
    const dialogRef = this.dialog.open(ProductDialogFormComponent, { disableClose: true });
  }

}

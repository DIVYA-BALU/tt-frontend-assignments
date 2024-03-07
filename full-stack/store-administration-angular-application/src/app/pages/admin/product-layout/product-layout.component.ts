import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Bill, Branch, Product, Section } from 'src/app/core/models/API.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductDialogFormComponent } from '../product-dialog-form/product-dialog-form.component';
import { BillService } from 'src/app/core/services/bill.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BillComponent } from '../bill/bill.component';
import { SectionService } from 'src/app/core/services/section.service';
import { BranchService } from 'src/app/core/services/branch.service';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})

export class ProductLayoutComponent {
  displayedColumns: string[] = ['Serial Number', 'Product Name', 'Branch', 'Section', 'COGS', 'Quantity', 'Price', 'Available Quantity', 'SelectedQuantity'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalProducts: number = 0;
  sections: Section[] = [];
  branches: Branch[] = [];
  branchId: string = "";
  sectionId: string ="";
  dataSource: MatTableDataSource<Product>;
  private subscription: Subscription = new Subscription;

  bill: Bill = {
    billItems: [],
    totalPrice: 0
  };
  makeBillButton: Boolean = false;
  clickedButtons: Set<string> = new Set();
  searchByName: string = '';

  constructor(private billService: BillService, private sectionService: SectionService, private branchService: BranchService, private productService: ProductService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource<Product>;
  }

  ngOnInit(): void {

    this.productService.setPaginatedProductsSubject();
    this.getProductDetails();
    this.sectionService.setSectionsSubject();
    this.sectionService.sections$.subscribe({
      next: (sections) => this.sections = sections,
      error: (HttpErrorResponse) => {
        alert('Error Occured Retry Later');
      }
    })

    this.branchService.setBranchesSubject();
    this.branchService.branches$.subscribe({
      next: (branches) => this.branches = branches,
      error: (HttpErrorResponse) => {
        alert('Error Occured Retry Later');
      }
    })

  }

  onSearchFilterChange() {
    this.productService.setPaginatedProductsSubject(this.pageNumber, this.pageSize, this.searchByName, this.branchId, this.sectionId);
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.productService.setPaginatedProductsSubject(this.pageNumber, this.pageSize, this.searchByName);
    this.getProductDetails();
  }

  getProductDetails() {
    const subscription = this.productService.paginatedProducts$.subscribe({
      next: (paginatedProducts) => {
        this.dataSource.data = paginatedProducts.content;
        this.totalProducts = paginatedProducts.totalElements;
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
    const quantity = parseInt(selectedQuantity);
    const itemIndex = this.bill.billItems.findIndex(item => item.product === product);

    if (itemIndex !== -1) {

      if (quantity === 0) {
        this.bill.billItems.splice(itemIndex, 1);
      } else {
        this.bill.billItems[itemIndex].quantity = quantity;
      }

    }

    else if (quantity !== 0) {
      this.bill.billItems.push({ product: product, quantity: quantity });
    }

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
      const billCopy: Bill = {
        billItems: [...this.bill.billItems],
        totalPrice: this.bill.totalPrice
      };
      this.dialog.open(BillComponent, {
        data: { bill: billCopy }
      });
      this.bill.billItems = [];
      this.bill.totalPrice = 0;
      this.clickedButtons.clear();
    }
  }

  openProductDialogForm() {
    const dialogRef = this.dialog.open(ProductDialogFormComponent, { disableClose: true });
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

}

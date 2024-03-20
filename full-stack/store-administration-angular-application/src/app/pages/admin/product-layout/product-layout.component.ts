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
import { UserDetailsService } from 'src/app/core/services/user-details.service';
import Swal from 'sweetalert2';

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
  sectionId: string = "";
  dataSource: MatTableDataSource<Product>;
  roleName: string = "";
  selectedIndex: number = 0;

  private sectionsSubscription: Subscription = new Subscription;
  private loginResponseSubscription: Subscription = new Subscription;
  private productsSubscription: Subscription = new Subscription;
  private branchesSubscription: Subscription = new Subscription;

  makeBillButton: Boolean = false;
  searchByName: string = '';

  constructor(private billService: BillService, private sectionService: SectionService, private branchService: BranchService, private productService: ProductService, private dialog: MatDialog,private userDetailsService: UserDetailsService) {
    this.dataSource = new MatTableDataSource<Product>;
  }

  ngOnInit(): void {

    this.loginResponseSubscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => {
        this.roleName = loginResponse.role.name;
        if (loginResponse.role.name === 'ADMIN') {
          this.productService.setPaginatedProductsSubject();
        }
        this.getProductDetails();
      }
    })
  }

  onSearchFilterChange() {

    if (this.roleName === 'ADMIN')
      this.productService.setPaginatedProductsSubject(this.pageNumber, this.pageSize, this.searchByName, this.branchId, this.sectionId);
    else {
      if (this.branchId !== '' && this.sectionId !== '') {
        this.productService.branchId = this.branchId;
        this.productService.sectionId = this.sectionId;
        this.productService.setPaginatedProductsSubject(this.pageNumber, this.pageSize, this.searchByName, this.branchId, this.sectionId);
      }
    }

  }

  onSectionSelectClick() {
    if (this.sections.length === 0) {
      this.sectionService.setSectionsSubject();
      this.sectionsSubscription = this.sectionService.sections$.subscribe({
        next: (sections) => this.sections = sections,
        error: () => {
          Swal.fire('Error Occured');
        }
      })
    }
  }

  onBranchSelectClick() {
    if (this.branches.length === 0) {
      this.branchService.setBranchesSubject();
      this.branchesSubscription = this.branchService.branches$.subscribe({
        next: (branches) => this.branches = branches,
        error: () => {
          Swal.fire('Error Occured');
        }
      })
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.productService.setPaginatedProductsSubject(this.pageNumber, this.pageSize, this.searchByName, this.branchId, this.sectionId);
  }

  getProductDetails() {
    this.productsSubscription = this.productService.paginatedProducts$.subscribe({
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

  openProductDialogForm() {
    this.dialog.open(ProductDialogFormComponent, { disableClose: true });
  }

  ngOnDestroy() {


    console.log("ondestroy");

    if (this.sectionsSubscription) {
      this.sectionsSubscription.unsubscribe();
    }
    if (this.loginResponseSubscription) {
      this.loginResponseSubscription.unsubscribe();
    }
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
    if (this.branchesSubscription) {
      this.branchesSubscription.unsubscribe();
    }

    this.productService.unSubscribeAll();
    this.sectionService.unSubscribeAll();
    this.branchService.unSubscribeAll();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Branch, Section } from 'src/app/core/models/API.model';
import { BranchService } from 'src/app/core/services/branch.service';
import { ProductService } from 'src/app/core/services/product.service';
import { SectionService } from 'src/app/core/services/section.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-dialog-form',
  templateUrl: './product-dialog-form.component.html',
  styleUrls: ['./product-dialog-form.component.scss']
})

export class ProductDialogFormComponent implements OnInit {

  productCreationForm: FormGroup;
  isLoading: boolean = false;
  isSaveButtonClicked: boolean = false;
  sections: Section[] = [];
  branches: Branch[] = [];
  productsData: { branch: Branch, quantity: number, price: number }[] = [];

  private sectionsSubscription: Subscription = new Subscription;
  private branchesSubscription: Subscription = new Subscription;
  private productSubscription: Subscription = new Subscription;

  constructor(private fb: FormBuilder, private productService: ProductService, private branchService: BranchService, private dialog: MatDialog, private sectionService: SectionService) {
    this.productCreationForm = this.fb.group({
      productName: ['', [Validators.required]],
      branch: ['', Validators.required],
      section: ['', Validators.required],
      cogs: ['', [Validators.required, this.validateNumber]],
      totalQuantity: ['', [Validators.required, this.validateNumber]],
      price: ['', [Validators.required, this.validateNumber]],
    })
  }

  ngOnInit() {
    this.sectionsSubscription = this.sectionService.getAllSections().subscribe({
      next: (sections) => this.sections = sections,
      error: () => {
        Swal.fire('Error Occured');
      }
    })
    this.branchesSubscription = this.branchService.getAllBranches().subscribe({
      next: (branches) => this.branches = branches,
      error: () => {
        Swal.fire('Error Occured');
      }
    })
  }

  validateNumber(control: { value: any; }) {
    const value = control.value;

    if (isNaN(value)) {
      return { 'invalidNumber': true };
    }

    return null;
  }

  submit() {

    this.isLoading = true;
    this.isSaveButtonClicked = true;

    if(this.productCreationForm.invalid)
    {
      this.isLoading = false;
      return;
    }
    
    this.productSubscription = this.productService.saveProducts(this.productCreationForm.value).subscribe({
      next: () => {
        this.isLoading = false,
          this.closeProductDialogForm();
        this.productCreationForm.reset();
        this.productService.setPaginatedProductsSubject();
        Swal.fire('Product Saved Successfully');
      },
      error: () => {
        this.isLoading = false;
        Swal.fire('Error Occured');
      }
    })
  }

  closeProductDialogForm() {
    this.dialog.closeAll();
  }

  ngOnDestroy() {

    if (this.sectionsSubscription) {
      this.sectionsSubscription.unsubscribe();
    }
    if (this.branchesSubscription) {
      this.branchesSubscription.unsubscribe();
    }
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }

        this.productService.unSubscribeAll();
        this.sectionService.unSubscribeAll();
        this.branchService.unSubscribeAll();
  }

}

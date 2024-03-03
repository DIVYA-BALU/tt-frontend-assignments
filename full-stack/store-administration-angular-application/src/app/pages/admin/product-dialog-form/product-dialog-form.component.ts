import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Branch, Product, Section } from 'src/app/core/models/API.model';
import { BranchService } from 'src/app/core/services/branch.service';
import { ProductService } from 'src/app/core/services/product.service';
import { SectionService } from 'src/app/core/services/section.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-product-dialog-form',
  templateUrl: './product-dialog-form.component.html',
  styleUrls: ['./product-dialog-form.component.scss']
})

export class ProductDialogFormComponent implements OnInit{

  productCreationForm: FormGroup;
  isLoading: boolean = false;
  sections: Section[] = [];
  branches: Branch[] = [];
  productsData: { branch: Branch, quantity: number, price: number }[] = [];

  constructor(private fb: FormBuilder, private productService: ProductService,private branchService: BranchService, private dialog: MatDialog, private sectionService: SectionService) {
    this.productCreationForm = this.fb.group({
      productName: ['', [Validators.required]],
      branch: [null, Validators.required],
      section: [null, Validators.required],
      cogs:['',[Validators.required,this.validateNumber]],
      totalQuantity:['',[Validators.required,this.validateNumber]],
      price:['',[Validators.required,this.validateNumber]],
    })
  }

  ngOnInit(){
    this.sectionService.getAllSections().subscribe({
      next: (sections) => this.sections = sections,
      error: (HttpErrorResponse) => {
        alert('Error Occured Retry Later');
      }
    })
    this.branchService.getAllBranches().subscribe({
      next: (branches) => this.branches = branches,
      error: (HttpErrorResponse) => {
        alert('Error Occured Retry Later');
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
    this.productService.saveProducts(this.productCreationForm.value).subscribe({
      next: () => {
        this.isLoading = false,
        this.closeProductDialogForm();
        this.productService.setPaginatedProductsSubject();
        this.dialog.open(PopUpComponent, {
          data: {
            message: 'Product Saved Successfully',
          },
        });
      },
      error: (HttpErrorResponse) => {
        this.isLoading = false;
        alert('Error Occured Retry Later');
      }
    })
  }

  closeProductDialogForm(){
    this.dialog.closeAll();
  }
}

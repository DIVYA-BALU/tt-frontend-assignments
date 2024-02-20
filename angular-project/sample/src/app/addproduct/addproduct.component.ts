import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  constructor(
    public dialogRef: MatDialogRef<AddproductComponent>,
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  addProductForm!: FormGroup;

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddProduct() {
    if (this.addProductForm.invalid) {
      return;
    }

    this.productService
      .addProduct(this.addProductForm.value)
      .subscribe((response) => {
        this.dialogRef.close();
      });
  }
}

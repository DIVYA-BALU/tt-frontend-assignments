import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent {
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public dialogRef: MatDialogRef<UpdateproductComponent>,
    private productService: ProductService
  ) {}

  productForm!: FormGroup;

  ngOnInit() {
    this.productForm = this.fb.group({
      _id: [this.data._id],
      name: [this.data.name],
      price: [this.data.price]
      
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  updateProduct() {
    this.productService
      .updateProduct(this.productForm.value)
      .subscribe((response) => {
        this.dialogRef.close();
      });
  }
}

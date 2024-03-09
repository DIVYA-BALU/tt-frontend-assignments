import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../service/auth.service';
import { PetPostService } from '../service/pet-post.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  constructor(
    public dialogRef: MatDialogRef<AddPostComponent>,
    @Inject(MAT_DIALOG_DATA) public id: string,
    private formBuilder: FormBuilder,
    private petPostService: PetPostService
  ) {}

  formResponse: FormGroup = this.formBuilder.group({
    category: ['', [Validators.required, Validators.minLength(1)]],
    breed: ['', [Validators.required, Validators.minLength(1)]],
    quantity: [0, [Validators.required, Validators.min(0)]],
    gender: ['', [Validators.required, Validators.minLength(1)]],
    weight: [0, [Validators.required, Validators.min(0)]],
    isInfected: [false],
    description: ['', [Validators.required, Validators.minLength(1)]],
  });

  file!: File;

  getImage(event: any) {
    this.file = event.target.files[0];
  }

  request() {
    const formData: FormData = new FormData();
    formData.append('category', this.formResponse.value.category);
    formData.append('breed', this.formResponse.value.breed);
    formData.append('image', this.file);
    formData.append('quantity', this.formResponse.value.quantity);
    formData.append('gender', this.formResponse.value.gender);
    formData.append('weight', this.formResponse.value.weight);
    formData.append('isInfected', this.formResponse.value.isInfected);
    formData.append('description', this.formResponse.value.description);

    this.petPostService.savePetPost(formData).subscribe({
      next: (res) => {
        this.dialogRef.close();
      },
    });
  }
}

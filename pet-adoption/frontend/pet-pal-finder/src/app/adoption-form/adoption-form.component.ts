import { Component, Inject, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PetPostService } from '../service/pet-post.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { AdoptionDetail, AdoptionDetailDto } from '../models/models';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { AdoptionService } from '../service/adoption.service';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  standalone:true,
  imports:[CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  styleUrls: ['./adoption-form.component.scss']
})
export class AdoptionFormComponent {


  constructor( public dialogRef: MatDialogRef<AdoptionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public petPostId:any,private formBuilder:FormBuilder,private adoptionService:AdoptionService ,private authService:AuthService){}

    adoptionDetail:AdoptionDetailDto = {
      profileId: '',
      petPostId: {
        _id: ''
      },
      noOfAdults: 0,
      noOfChildren: 0,
      allergyToAnimal: false,
      homeType: '',
      familyAcceptance: false,
      posterId: ''
    }

    

    request() {
      this.adoptionService.requestAdoption(this.adoptionDetail).subscribe({
        next : (val) => {
          console.log(val);
        this.dialogRef.close();  
        }
      })
      
      }

      ngOnInit(){
        this.adoptionDetail.petPostId._id = this.petPostId.petPostId;
        this.adoptionDetail.posterId = this.petPostId.posterId;
        this.authService.sharedId$.subscribe({
          next : (id) => {
            this.adoptionDetail.profileId = id;
          }
        })
      }
}

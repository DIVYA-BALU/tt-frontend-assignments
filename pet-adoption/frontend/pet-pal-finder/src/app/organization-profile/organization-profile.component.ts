import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ImagePathConverterPipe } from "../pipes/image-path-converter.pipe";
import { Organization } from '../models/models';
import { ProfileService } from '../service/profile.service';

@Component({
    selector: 'app-organization-profile',
    standalone: true,
    templateUrl: './organization-profile.component.html',
    styleUrls: ['./organization-profile.component.scss'],
    imports: [CommonModule, MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatMenuModule, ImagePathConverterPipe]
})
export class OrganizationProfileComponent {

  constructor(private formBuilder:FormBuilder, private authService:AuthService,private router:Router,private profileService:ProfileService){}

  organization:Organization={
    _id: '',
    name: '',
    email: '',
    organizationPhoto: '',
    location: {
      doorNo: '',
      street: '',
      city: '',
      district: '',
      state: '',
      country: ''
    },
    contactNumber: 0,
    status: ''
  }
  formResponse:FormGroup = this.formBuilder.group({
    name:[this.organization.name,[Validators.required, Validators.minLength(1)]],
    image:[],
    location:this.formBuilder.group({
      doorNo:[this.organization.location.doorNo,[Validators.required, Validators.minLength(1)]],
      street:[this.organization.location.street,[Validators.required, Validators.minLength(1)]],
      city:[this.organization.location.city,[Validators.required, Validators.minLength(1)]],
      district:[this.organization.location.district,[Validators.required, Validators.minLength(1)]],
      state:[this.organization.location.state,[Validators.required, Validators.minLength(1)]],
      country:[this.organization.location.country,[Validators.required, Validators.minLength(1)]],
    }),
    contactNumber:[this.organization.contactNumber,[Validators.required, Validators.minLength(1)]],
  })

  file!: File;


  getImage(event:any){
    this.file = event.target.files[0]
    this.organization.organizationPhoto = URL.createObjectURL(event.target.files[0]);
  }

  update() {
    const formData:FormData = new FormData();
    formData.append("name",this.formResponse.value.name);
    formData.append("email",this.formResponse.value.email);
    formData.append("organizationPhoto",this.file);
    formData.append("location.doorNo",this.formResponse.value.location.doorNo);
    formData.append("location.street",this.formResponse.value.location.street);
    formData.append("location.city",this.formResponse.value.location.city);
    formData.append("location.district",this.formResponse.value.location.district);
    formData.append("location.state",this.formResponse.value.location.state);
    formData.append("location.country",this.formResponse.value.location.country);
    formData.append("contactNumber",this.formResponse.value.contactNumber);
    formData.append("id",this.organization._id);
    console.log(this.formResponse.value);
    
    this.profileService.updateOrganizationProfile(formData).subscribe({next : (res) => {
      console.log(res);
    }})
    }

    logout() {
      localStorage.clear();
      this.authService.logout()
      this.router.navigate(['pet'])
      }
      ngOnInit(){
        console.log("step1");
        
        this.authService.sharedId$.subscribe({
          next:(id) => {
            console.log("step2");
            
            this.profileService.getOrganizationProfile(id).subscribe({
              next: (val)=>{
                console.log("profile",val);
                
                this.organization = val;
                this.formResponse = this.formBuilder.group({
                  name:[this.organization.name,[Validators.required, Validators.minLength(1)]],
                  image:[],
                  location:this.formBuilder.group({
                    doorNo:[this.organization.location.doorNo,[Validators.required, Validators.minLength(1)]],
                    street:[this.organization.location.street,[Validators.required, Validators.minLength(1)]],
                    city:[this.organization.location.city,[Validators.required, Validators.minLength(1)]],
                    district:[this.organization.location.district,[Validators.required, Validators.minLength(1)]],
                    state:[this.organization.location.state,[Validators.required, Validators.minLength(1)]],
                    country:[this.organization.location.country,[Validators.required, Validators.minLength(1)]],
                  }),
                  contactNumber:[this.organization.contactNumber,[Validators.required, Validators.minLength(1)]],
                })
              }
            })
          }
        })
      }
}

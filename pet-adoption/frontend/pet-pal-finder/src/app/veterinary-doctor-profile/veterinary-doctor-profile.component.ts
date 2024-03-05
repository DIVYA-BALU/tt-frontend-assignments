import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../service/profile.service';
import { Adopter, VeterinaryDoctor } from '../models/models';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-veterinary-doctor-profile',
  standalone: true,
  imports: [CommonModule, MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
     MatIconModule,
     MatMenuModule],
  templateUrl: './veterinary-doctor-profile.component.html',
  styleUrls: ['./veterinary-doctor-profile.component.scss']
})
export class VeterinaryDoctorProfileComponent {


  user:VeterinaryDoctor={
    _id: '',
    name: '',
    profilePhoto: '',
    email: '',
    location: {
      doorNo: '',
      street: '',
      city: '',
      district: '',
      state: '',
      country: ''
    },
    degree: '',
    degreeCertificate: '',
    contactNumber: 0,
    status: '',
    isSubscribed: false
  };
  constructor(private formBuilder: FormBuilder, private router: Router, private authService:AuthService,private profileService:ProfileService) { }
  profile!: File;
  imgUrl:string=''
 

  formResponse:FormGroup = this.formBuilder.group({
    name:[this.user.name,[Validators.required, Validators.minLength(1)]],
    email:[this.user.email,[Validators.email]],
    profilePhoto:[],
    location:this.formBuilder.group({
      doorNo:[this.user.location.doorNo,[Validators.required, Validators.minLength(1)]],
      street:[this.user.location.street,[Validators.required, Validators.minLength(1)]],
      city:[this.user.location.state,[Validators.required, Validators.minLength(1)]],
      district:[this.user.location.district,[Validators.required, Validators.minLength(1)]],
      state:[this.user.location.state,[Validators.required, Validators.minLength(1)]],
      country:[this.user.location.country,[Validators.required, Validators.minLength(1)]],
    }),
    contactNumber:[this.user.contactNumber,[Validators.required, Validators.minLength(1)]],
    image:[]
  })

  
  getProfile(event: any) {
    this.profile = event.target.files[0]
    this.user.profilePhoto = URL.createObjectURL(event.target.files[0]);
  }

  register() {
    const formData:FormData = new FormData();
    formData.append("name",this.formResponse.value.name);
    formData.append("profilePhoto",this.profile);
    formData.append("occupation",this.formResponse.value.occupation);
    formData.append("dob",this.formResponse.value.dob);
    formData.append("location.doorNo",this.formResponse.value.location.doorNo);
    formData.append("location.street",this.formResponse.value.location.street);
    formData.append("location.city",this.formResponse.value.location.city);
    formData.append("location.district",this.formResponse.value.location.district);
    formData.append("location.state",this.formResponse.value.location.state);
    formData.append("location.country",this.formResponse.value.location.country);
    formData.append("contactNumber",this.formResponse.value.contactNumber);
    formData.append("status",this.user.status);
    formData.append("isSubscribed",this.user.isSubscribed?"true":"false");
    console.log(this.formResponse.value);
    this.authService.sharedId$.subscribe({
      next: (id) => {
        formData.append("id",id);
        this.profileService.updateVeterinaryDoctorProfile(formData).subscribe({next : (res) => {
          console.log("doc",res);
          
        }})
      }
    })
    
    
    }
    
    logout() {
      localStorage.clear();
      this.authService.logout()
      this.router.navigate(['pet'])
      }
  ngOnInit(){
    this.profileService.sharedUser$.subscribe({
      next: (user) => {
        if ('isSubscribed' in user) {
          this.user = user;
            console.log("doctor",this.user);
            this.formResponse= this.formBuilder.group({
    name:[this.user.name,[Validators.required, Validators.minLength(1)]],
    email:[this.user.email,[Validators.email]],
    profilePhoto:[],
    location:this.formBuilder.group({
      doorNo:[this.user.location.doorNo,[Validators.required, Validators.minLength(1)]],
      street:[this.user.location.street,[Validators.required, Validators.minLength(1)]],
      city:[this.user.location.state,[Validators.required, Validators.minLength(1)]],
      district:[this.user.location.district,[Validators.required, Validators.minLength(1)]],
      state:[this.user.location.state,[Validators.required, Validators.minLength(1)]],
      country:[this.user.location.country,[Validators.required, Validators.minLength(1)]],
    }),
    contactNumber:[this.user.contactNumber,[Validators.required, Validators.minLength(1)]],
    image:[]
  })
      }
      }
    })
  }
}

import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Adopter } from 'src/app/models/models';
import { AuthService } from 'src/app/service/auth.service';
import { ProfileService } from 'src/app/service/profile.service';
import { ImagePathConverterPipe } from "../../pipes/image-path-converter.pipe";

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    standalone: true,
    styleUrls: ['./profile-details.component.scss'],
    imports: [MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule, ImagePathConverterPipe]
})
export class ProfileDetailsComponent {

  constructor(private formBuilder: FormBuilder, private route: Router, private authService:AuthService,private profileService:ProfileService) { }
  profile!: File;
  imgUrl:string=''
  adopter:Adopter = {
    _id: '',
    name: '',
    email: '',
    profilePhoto: '',
    occupation: '',
    location: {
      doorNo: '',
      street: '',
      city: '',
      district: '',
      state: '',
      country: ''
    },
    contactNumber: 0,
    dob: new Date()
  };

  formResponse:FormGroup = this.formBuilder.group({
    name:[this.adopter.name,[Validators.required, Validators.minLength(1)]],
    email:[this.adopter.email,[Validators.email]],
    occupation:[this.adopter.occupation],
    profilePhoto:[],
    dob:[this.adopter.dob],
    location:this.formBuilder.group({
      doorNo:[this.adopter.location.doorNo,[Validators.required, Validators.minLength(1)]],
      street:[this.adopter.location.street,[Validators.required, Validators.minLength(1)]],
      city:[this.adopter.location.state,[Validators.required, Validators.minLength(1)]],
      district:[this.adopter.location.district,[Validators.required, Validators.minLength(1)]],
      state:[this.adopter.location.state,[Validators.required, Validators.minLength(1)]],
      country:[this.adopter.location.country,[Validators.required, Validators.minLength(1)]],
    }),
    contactNumber:[this.adopter.contactNumber,[Validators.required, Validators.minLength(1)]],
    image:[]
  })

  
  getProfile(event: any) {
    this.profile = event.target.files[0]
    this.adopter.profilePhoto = URL.createObjectURL(event.target.files[0]);
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
    console.log(this.formResponse.value);
    this.authService.sharedId$.subscribe({
      next: (id) => {
        formData.append("id",id);
        this.profileService.updateAdopterProfile(formData).subscribe({next : (res) => {
          this.route.navigate(['pet'])
        }})
      }
    })
    
    
    }
    
    ngOnInit(){
      this.authService.sharedId$.subscribe({
        next: (id) => {
          this.profileService.getAdopterProfile(id).subscribe({next : (res) => {
            this.adopter=res;
            console.log("adopter",this.adopter);
            this.formResponse= this.formBuilder.group({
    name:[this.adopter.name,[Validators.required, Validators.minLength(1)]],
    email:[this.adopter.email,[Validators.email]],
    occupation:[this.adopter.occupation],
    profilePhoto:[],
    dob:[this.adopter.dob],
    location:this.formBuilder.group({
      doorNo:[this.adopter.location.doorNo,[Validators.required, Validators.minLength(1)]],
      street:[this.adopter.location.street,[Validators.required, Validators.minLength(1)]],
      city:[this.adopter.location.state,[Validators.required, Validators.minLength(1)]],
      district:[this.adopter.location.district,[Validators.required, Validators.minLength(1)]],
      state:[this.adopter.location.state,[Validators.required, Validators.minLength(1)]],
      country:[this.adopter.location.country,[Validators.required, Validators.minLength(1)]],
    }),
    contactNumber:[this.adopter.contactNumber,[Validators.required, Validators.minLength(1)]],
    image:[]
  })
          }})
        }
      })
    }
  
}

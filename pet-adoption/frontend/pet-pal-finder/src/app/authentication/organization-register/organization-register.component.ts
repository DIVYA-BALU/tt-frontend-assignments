import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.scss']
})
export class OrganizationRegisterComponent {

  constructor(private formBuilder:FormBuilder, private authService:AuthService){}

  formResponse:FormGroup = this.formBuilder.group({
    name:["",[Validators.required, Validators.minLength(1)]],
    email:["",[Validators.email]],
    profilePhoto:[],
    location:this.formBuilder.group({
      doorNo:["",[Validators.required, Validators.minLength(1)]],
      street:["",[Validators.required, Validators.minLength(1)]],
      city:["",[Validators.required, Validators.minLength(1)]],
      district:["",[Validators.required, Validators.minLength(1)]],
      state:["",[Validators.required, Validators.minLength(1)]],
      country:["",[Validators.required, Validators.minLength(1)]],
    }),
    contactNumber:["",[Validators.required, Validators.minLength(1)]],
  })

  file!: File;


  getImage(event:any){
    this.file = event.target.files[0]
  }

  request() {
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
    console.log(this.formResponse.value);
    
    this.authService.registerOrganization(formData).subscribe({next : (res) => {
      console.log(res);
    }})
    }
}

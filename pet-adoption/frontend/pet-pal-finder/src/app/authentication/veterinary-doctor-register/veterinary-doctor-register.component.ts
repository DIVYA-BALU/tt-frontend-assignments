import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veterinary-doctor-register',
  templateUrl: './veterinary-doctor-register.component.html',
  styleUrls: ['./veterinary-doctor-register.component.scss']
})
export class VeterinaryDoctorRegisterComponent {
  constructor(private formBuilder:FormBuilder){}

  formResponse:FormGroup = this.formBuilder.group({
    username:["",[Validators.required, Validators.minLength(1)]],
    password:["",[Validators.required, Validators.minLength(1)]]
  })

  login(){
    if(this.formResponse.invalid){
      console.log("invalid");
      
    }
    console.log(this.formResponse.value);
    
  }
}

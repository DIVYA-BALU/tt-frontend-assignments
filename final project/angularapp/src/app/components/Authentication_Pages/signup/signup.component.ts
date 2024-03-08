import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { passwordmatch } from 'src/app/Validators/passwordmatch.validator';
import { User } from 'src/app/models/user';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';
import { Location } from 'src/app/models/location';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  type = "password";
  isText = false;
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder,private userService:UserService,private router:Router,private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userName: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9]+@gmail\.com$")]),
      location: new FormControl(null, [Validators.required]),
      userPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null)
    },
      {
        validators: passwordmatch
      })
  }

  //to view the password typed
  onpassclick() {
    this.isText = !this.isText;
    if (this.isText) {
      this.type = "text";
    }
    else {
      this.type = "password";
    }
  }

  temp:Location = {
    id: '',
    userId: '',
    location: ''
  }

  addLocation(){
    this.locationService.addLocation(this.temp).subscribe(
      (response:Location)=>{
        console.log("success");
      }
    );
  }

  signup(){
    this.signupForm.patchValue({ location: this.signupForm.get('location')?.value.toLowerCase()});
    this.userService.signUpUser(this.signupForm).subscribe((data:User) => {
      this.temp.userId=data.userId;
      this.temp.location=data.location.toLowerCase();
      this.addLocation();
      alert("User Sign-up successfull. Please login to continue...");
      delay(3000)
      this.router.navigate(['/login'])
    }, error => {
      alert("User Already Exists...");
    }
    );
    //console.log(this.signupForm.value)
  }
}

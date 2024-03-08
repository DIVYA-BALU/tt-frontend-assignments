import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { passwordmatch } from 'src/app/Validators/passwordmatch.validator';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {
  type = "password";
  isText = false;
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) {
  }

  ngOnInit(): void {
    this.forgotpasswordForm = this.fb.group({
      userName: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9]+@gmail\.com$")]),
      userPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null)
    },
      {
        validators: passwordmatch
      })
  }

  //to display the password typed 
  onpassclick() {
    this.isText = !this.isText;
    if (this.isText) {
      this.type = "text";
    }
    else {
      this.type = "password";
    }
  }

  //to reset the password
  forgotpass() {
    this.userService.forgotPassUser(this.forgotpasswordForm).subscribe(data => {
      alert("Password Update Successfull. Please login to continue...");
      delay(3000)
      this.router.navigate(['/login'])
    }, error => {
      alert("Username doesn't exists...");
    }
    );
    //console.log(this.forgotpasswordForm.value)
  }

}

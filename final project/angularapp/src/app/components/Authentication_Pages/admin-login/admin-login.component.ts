import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  type = "password";
  isText = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern("^[a-z0-9]+@gmail\.com$")]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onpassclick() {
    this.isText = !this.isText;
    if (this.isText) {
      this.type = "text";
    }
    else {
      this.type = "password";
    }
  }

    login() {
      if(this.loginForm.value.userName === 'admin@gmail.com'&& this.loginForm.value.userPassword === "12341234"){
        localStorage.setItem('userId','admin')
        this.router.navigate(['/adminhome'])
      }
      else{
        alert("Incorrect Username/Password!!!")
      }
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService, register } from './register.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private registerService: RegisterService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  registerForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    role: ['PATIENT']
  });

  onSubmit() {
    // console.log(this.loginForm.value);
  }
  register() {
    if (!this.registerForm.invalid) {
      this.registerService.register(<register>this.registerForm.value).subscribe({
        next: (content) => {
          Swal.fire({
            title: 'Registeration Successful!',
            text: 'redirected to login',
            icon: 'success'
          })
        },
        error: (error) => {
          console.log("error:", error);
          Swal.fire({
            title: "Enter Valid User Details!",
            text: "Try again",
            icon: "error",
          });
        },
        complete: () => {
          this.router.navigate(['login']);
        }
      });
    }
  }

  registerPage() {
    this.router.navigate(['register']);
  }
  loginPage() {
    this.router.navigate(['login']);
  }

  homePage() {
    this.router.navigate(['home']);
  }

}

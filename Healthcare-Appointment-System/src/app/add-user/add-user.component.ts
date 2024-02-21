import { Component } from '@angular/core';
import { RegisterService, register } from '../register/register.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class UserComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
  constructor(private registerService: RegisterService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserComponent>
  ) { }

  addUserForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    role: ['', Validators.required]
  });

  onSubmit() {
    // console.log(this.loginForm.value);
  }

  close(): void {
    this.dialogRef.close();
  }

  register() {
    if (!this.addUserForm.invalid) {
      this.registerService.register(<register>this.addUserForm.value).subscribe({
        next: (content) => {
          Swal.fire({
            title: 'New User Added',
            text: " Successful!",
            icon: 'success'
          })
        },
        error: (error) => {
          console.log("error1:", error);
          Swal.fire({
            title: "Enter Valid User Details!",
            text: "Try again",
            icon: "error",
          });
        },
      });
    }
  }

}

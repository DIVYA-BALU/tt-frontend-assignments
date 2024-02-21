import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router : Router,private signupService : SignupService){ }

  signUp : FormGroup | any;

  ngOnInit() {
    this.signUp = new FormGroup({
      userName : new FormControl<string>('',Validators.required),
      email: new FormControl<string>('',[Validators.required,Validators.email]),
      password : new FormControl<string>('',Validators.required)
    })
  }

  getErrorMessage() {
    if (this.signUp.hasError('required')) {

      return 'You must enter a value';
    }
    return this.signUp.hasError('email') ? 'Not a valid email' : '';
  }


  onSubmit(){
    if(this.signUp.valid === true){
      // const atIndex = this.signUp.value.email.indexOf('@');
      // if(this.signUp.value.email.substring(0,atIndex) === 'admin1'){
      //   this.signUp.value.role = "ADMIN";
      // }
      // else if(this.signUp.value.email.substring(0,atIndex) === 'financialadvisor1'){
      //   this.signUp.value.role = "FINANCIAL_ADVISOR";
      // }
      // else if(this.signUp.value.email.substring(0,atIndex) === 'financialadvisor2'){
      //   this.signUp.value.role = "FINANCIAL_ADVISOR";
      // }
      // else{
      //   this.signUp.value.role = "USER";
      // }
      // console.log(this.signUp.value.role);
      
      
      this.signupService.registerUser(this.signUp.value).subscribe({
        next : (response : any) => {
          if(response.status === 200){
            this.router.navigate(['login']);
          }
        },
        error: (error : any) => {

        },
        complete : () => {

        }
      })
    }
  }

  login(){
    this.router.navigate(['/login']);
  }
}

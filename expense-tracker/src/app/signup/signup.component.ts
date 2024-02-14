import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userName : string = '';
  email : string = '';
  password : string = '';
  role : any = '';

  constructor(private router : Router,private signupService : SignupService){ }

  signUp(){
    console.log(this.userName,this.email,this.password);
    const atIndex = this.email.indexOf('@');
    if(this.email.substring(0,atIndex) === 'admin1'){
      this.role = "ADMIN";
    }
    else if(this.email.substring(0,atIndex) === 'financialadvisor1'){
      this.role = "FINANCIAL_ADVISOR";
    }
    else if(this.email.substring(0,atIndex) === 'financialadvisor2'){
      this.role = "FINANCIAL_ADVISOR";
    }
    else{
      this.role = "USER";
    }
    console.log(this.role);
    
    
    this.signupService.registerUser(this.userName,this.email,this.password,this.role).subscribe({
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

  login(){
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  signIn : FormGroup | any;

  ngOnInit() {
    this.signIn = new FormGroup({
      userName : new FormControl<string>('',Validators.required),
      password : new FormControl<string>('',Validators.required)
    })
  }


  onSubmit() {
    if(this.signIn.valid){
      this.loginService.authenticate(this.signIn.value).subscribe({
        next: (response: any) => {
          
          if (response.status == 200) {
            localStorage.setItem('isLogin','true');
            localStorage.setItem('token', response.body.token);
            localStorage.setItem('role', this.loginService.DecodeToken(response.body.token).role[0].authority);
            localStorage.setItem('userName', this.signIn.value.userName);

            // if(`${localStorage.getItem('role')}` === 'ROLE_USER'){
              this.loginService.getAccountDetails(this.signIn.value.userName).subscribe({
                next: (accountDetails: any) => {
                  localStorage.setItem('accountNumber', accountDetails.body.accountNumber);
                  this.router.navigate(['home']);
                },  
                error: (error: any) => {
                  console.log("error : ", error);
                  if(error.status === 404){
                    this.router.navigate(['addAccount']);
                  }
                },
                complete: () => {
                  
                }
              }); 
            // }
            // else{
            //   this.router.navigate(['list-users']);
            // }
          }
        },
        error: (error: any) => {
          if(error.status === 401){
            this.loginService.openSnackBar('Invalid Credentials');
          }
          // alert("Invalid credentials");
        },
        complete: () => {

        }
      });
    }
  }
}

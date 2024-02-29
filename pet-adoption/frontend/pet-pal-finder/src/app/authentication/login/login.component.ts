import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private route:Router){}

  formResponse:FormGroup = this.formBuilder.group({
    email:["",[Validators.required, Validators.minLength(1)]],
    password:["",[Validators.required, Validators.minLength(1)]]
  })

  login(){
    if(this.formResponse.invalid){
      console.log("invalid");
      
    }
    console.log(this.formResponse.value);
    
    this.authService.login(this.formResponse.value).subscribe({next:(token) =>{
      console.log(token);
      localStorage.setItem("token",token.token)
      const tokenInfo: any = jwtDecode(token.token);
      const role: String = tokenInfo.role[0].authority;
     if(role === environment.admin){
      this.route.navigate(['admin']);
     }
      
    }})
    
  }
}


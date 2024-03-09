import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { jwtDecode } from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type = "password";
  isText = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
      
  }

  private jwtHelper : JwtHelperService = new JwtHelperService();
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern("^[a-z0-9]+@gmail\.com$")]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]]
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

  login() {
    this.userService.loginUser(this.loginForm).subscribe(
      (data : any) => {
        const decodedToken: any = this.jwtHelper.decodeToken(data.token);
        const user = decodedToken.sub;
        
        console.log(decodedToken);
        console.log(user);
      
        localStorage.setItem('userId', decodedToken.userId);
        localStorage.setItem('userName', user);
        localStorage.setItem('location', decodedToken.location);

        this.router.navigate(['/home'])
      }, 
      error => {
        alert("incorrect Username/password");
      }
    );
  }
    
}

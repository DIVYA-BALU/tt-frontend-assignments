import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type = "password";
  isText = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) {
  }

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

    //to login the existing user by validating their credentials
    login() {
      this.userService.loginUser(this.loginForm).subscribe(data => {
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('location', data.location);
        this.router.navigate(['/home'])
      }, error => {
        alert("incorrect Username/password");
      }
      );
      //console.log(this.loginForm.value)
    }
    
}

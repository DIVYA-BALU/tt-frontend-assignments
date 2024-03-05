import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { ProfileService } from '../profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!:FormGroup;
  status: string = '';

  constructor(private loginService: LoginService, private sharedService: SharedServiceService, private profileService: ProfileService, private route: Router){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,20}$")])
    })
  }

  onLogin(){
    this.loginService.login(this.loginForm.value).subscribe((data) => {
      localStorage.setItem("accessToken", data.accessToken);
      this.sharedService.setLogin();
      this.profileService.getProfile().subscribe((data) => {
        localStorage.setItem("Role", data.role.roleName)
        localStorage.setItem("Permission", JSON.stringify(data.authorities))
        if (data.role.roleName === 'USER') {
          this.route.navigate(['/user'])
        }else {
          this.route.navigate(['/employee'])
        }
        this.sharedService.setPermission();
      });
    },
    (error) => {
      this.status = error.error;
    });
  }
}

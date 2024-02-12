import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  buttonClick: boolean = false;
  updateStatus: string = "";
  deleteStatus: string = "";

  profile: User = {
    userId: "",
    firstName: "",
    lastName: "",
    bio: "",
    profession: "",
    organisation: "",
    email: ""
  }

  constructor(private profileService: ProfileService, private loginService: LoginService, private cookieService: CookieService, private route: Router) {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getUser().subscribe(data => {
      console.log(data);
      this.profile = data;
      console.log(this.profile);
    })
  }

  onProfile(profileForm: NgForm) {
    this.buttonClick = true;
    this.profile = profileForm.value;
    this.profileService.updateUser(this.profile).subscribe(data => this.updateStatus = data);
  }

  deleteUser() {
    this.profileService.deleteUser().subscribe(data => this.deleteStatus = data);
    this.loginService.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    this.cookieService.deleteAll('isLoggedIn');
    this.route.navigate(['/home']).then(() => this.reloadPage());
  }
  
  reloadPage(){
    window.location.reload()
  }
}

interface User {
  userId: string;
  firstName: string,
  lastName: string,
  bio: string,
  profession: string;
  organisation: string;
  email: string;
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pageResponse } from 'src/app/models/pageResponse';
import { LoginService } from 'src/app/service/login.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.scss']
})
export class ViewUserProfileComponent {
  profile: pageResponse = {
    _id: '',
    name: '',
    page_handle: '',
    bio: '',
    dp: '',
    dob: new Date,
    page_privacy: '',
    post_count: '',
    follower_count: '',
    following_count: ''
  };
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.profileService.sharedUser.subscribe({next:(page) => {
      console.log("new component",page);
      this.profile = page;
      console.log(this.profile);
      
    }})
  }

  
}

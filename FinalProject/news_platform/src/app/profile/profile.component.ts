import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from '../model/User';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user!: User;
  subscriptions: Subscription[] = [];
  profileForm!: FormGroup;

  status: string = '';

  constructor(private profileService: ProfileService, private route: Router) {
    this.getProfile();
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNo: new FormControl(''),
      occupation: new FormControl(''),
      location: new FormControl(''),
    });
  }

  getProfile() {
    this.subscriptions.push(
      this.profileService.getProfile().subscribe((data) => {
        this.user = data;
        this.profileForm = new FormGroup({
          firstName: new FormControl(this.user.firstName),
          lastName: new FormControl(this.user.lastName),
          email: new FormControl(this.user.email),
          phoneNo: new FormControl(this.user.phoneNo),
          occupation: new FormControl(this.user.occupation),
          location: new FormControl(this.user.location),
        });
      })
    );
  }

  onSave() {
    this.subscriptions.push(
      this.profileService.updateProfile(this.profileForm.value).subscribe(
        (data) => {
          Swal.fire({
            title: 'Thank you!',
            text: 'Profile updated successfully!',
            icon: 'success',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      )
    );
  }

  savedStories() {
    this.route.navigate(['/user/savedstories']);
  }

  subscription() {
    this.route.navigate(['/user/mySubscription']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}

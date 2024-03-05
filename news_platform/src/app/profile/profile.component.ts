import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from '../model/User';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user!: User;

  profileForm!: FormGroup;

  status: string = '';

  durationInSeconds = 5;

  constructor(private profileService: ProfileService, private _snackBar: MatSnackBar) {
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
    });
  }

  onSave() {
    this.profileService.updateProfile(this.profileForm.value).subscribe(
      (data) => {
        this.status = data;
      },
      (error) => {
        this.status = error.error;
      }
    );
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  templateUrl: 'snack-bar-annotated-component-example-snack.html',
  styleUrls: ['./snack-bar-annotated-component-example-snack.scss']
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}

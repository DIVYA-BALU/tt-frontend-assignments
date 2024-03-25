import { Component, Inject, OnDestroy } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnDestroy {
  user!: User;
  subscriptions: Subscription[] = [];
  status: string = '';

  constructor(
    private profileService: ProfileService,
    public dialog: MatDialog
  ) {
    this.getProfile();
  }

  getProfile() {
    this.subscriptions.push(
      this.profileService.getProfile().subscribe((data) => {
        this.user = data;
      })
    );
  }

  openDialog() {
    this.dialog
      .open(DialogDataExampleDialog, {
        data: this.user,
      })
      .afterClosed()
      .subscribe(() => {
        this.getProfile();
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['dialog-data-example-dialog.scss'],
})
export class DialogDataExampleDialog {
  profileForm!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      email: new FormControl(this.data.email),
      phoneNo: new FormControl(
        this.data.phoneNo,
        Validators.pattern(/^\d{10}$/)
      ),
      occupation: new FormControl(this.data.occupation),
      location: new FormControl(this.data.location),
    });
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
}

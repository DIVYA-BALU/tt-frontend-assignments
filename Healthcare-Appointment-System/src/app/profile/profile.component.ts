import { Component, Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProfileService } from './profile.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
interface data {
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  specialization: string,
  inTime: string,
  outTime: string,
  phoneno: string,
  doctor: boolean,
  flag: boolean,
  role: string
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private profileService: ProfileService, private cookieSevice: CookieService, private router: Router,
    @Inject(MAT_DIALOG_DATA) public details: data,
    public dialogRef: MatDialogRef<ProfileComponent>
  ) { }

  receptionist = true;
  parentData!: data;
  ngOnInit() {
    // this.data.currentMessage.subscribe((message) => (this.parentData = message));
    this.parentData = this.details;
    this.receptionist = this.parentData.role === 'RECEPTIONIST';
  }

  updateUser() {
    this.profileService.save({
      id: this.parentData.id,
      firstname: this.parentData.firstname,
      lastname: this.parentData.lastname,
      email: this.parentData.email,
      specialization: this.parentData.specialization,
      inTime: this.parentData.inTime,
      outTime: this.parentData.outTime,
      phoneno: this.parentData.phoneno,
    })
      .subscribe({
        next: (response) => {
          // console.log(response);
          Swal.fire({
            title: 'Profile Updated',
            text: 'Successfully',
            icon: 'success',
          });
        },
        error: (error) => {
          console.log(error);
          Swal.fire({
            title: 'Profile Updation',
            text: 'Failed',
            icon: 'error',
          });
        },
      });
  }
  logout() {
    this.dialogRef.close();
    this.cookieSevice.delete('isLogged');
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  close(): void {
    this.dialogRef.close();
  }
  cancel() {
    window.history.go(-1);
  }

}

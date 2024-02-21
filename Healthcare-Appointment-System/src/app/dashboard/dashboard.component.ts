import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { DoctorComponent } from '../doctor/doctor.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { UserComponent } from '../add-user/add-user.component';
import { PermissionService } from '../service/permission.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(private data: DataService, public dialog: MatDialog, private service: PermissionService) {
    this.service.getPermission();
  }

  isAdmin() {
    return sessionStorage.getItem('role') === 'ADMIN';
  }

  isDoctor() {
    return sessionStorage.getItem('role') === 'DOCTOR';
  }
  // sendDetails() {
  //   this.data.changeMessage({
  //     id: sessionStorage.getItem('id'),
  //     firstname: sessionStorage.getItem('firstname'),
  //     lastname: sessionStorage.getItem('lastname'),
  //     email: sessionStorage.getItem('email'),
  //     specialization: sessionStorage.getItem('specialization'),
  //     inTime: sessionStorage.getItem('inTime'),
  //     outTime: sessionStorage.getItem('outTime'),
  //     phoneno: sessionStorage.getItem('phoneno'),
  //     doctor: (sessionStorage.getItem('role') === 'DOCTOR'),
  //     flag: false,
  //     role: sessionStorage.getItem('role')
  //   });
  // }
  openProfileDialog(): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      data: {
        id: sessionStorage.getItem('id'),
        firstname: sessionStorage.getItem('firstname'),
        lastname: sessionStorage.getItem('lastname'),
        email: sessionStorage.getItem('email'),
        specialization: sessionStorage.getItem('specialization'),
        inTime: sessionStorage.getItem('inTime'),
        outTime: sessionStorage.getItem('outTime'),
        phoneno: sessionStorage.getItem('phoneno'),
        doctor: (sessionStorage.getItem('role') === 'DOCTOR'),
        flag: false,
        role: sessionStorage.getItem('role')
      },
      height: '500px',
      width: '700px',
    });
  }

  openUserDialog(): void {
    const dialogRef = this.dialog.open(UserComponent, {
      height: '600px',
      width: '500px',
    });
  }

}

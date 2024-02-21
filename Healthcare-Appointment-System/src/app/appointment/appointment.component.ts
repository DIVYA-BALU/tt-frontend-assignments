import { Component } from '@angular/core';
import { AppointmentService } from './appointment.service';
import { DataService } from '../service/data.service';
import { AppointmentCompComponent } from '../appointment-comp/appointment-comp.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointments: any = '';
  username: any = '';
  isdoctor: boolean = false;
  admin: any = '';
  id: string = '';
  patient = false;
  details: any;
  flag = false;
  constructor(private appointmentService: AppointmentService,
    private data: DataService,
    public dialog: MatDialog
  ) {
  }
  ngOnInit() {
    this.data.currentMessage.subscribe((message) => {
      this.details = message;
    });
    if (this.details.patient) {
      this.patient = this.details.patient;
      this.id = this.details.patientId;
    }
    this.listAppointment();
  }

  // listAppointment() {
  //   this.username = sessionStorage.getItem('firstname') + ' ' + sessionStorage.getItem('lastname');
  //   this.admin = sessionStorage.getItem('role') === 'ADMIN';
  //   this.isdoctor = sessionStorage.getItem('role') === 'DOCTOR';
  //   this.appointmentService.getAppointment(this.patient, this.id).subscribe({
  //     next: (appointments) => {
  //       this.appointments = appointments;
  //       if (appointments.length === 0)
  //         this.flag = true;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   });
  // }

  currentPage: number = 0;
  pageSize: number = 6;
  lastpage = false;

  listAppointment(): void {
    this.username = sessionStorage.getItem('firstname') + ' ' + sessionStorage.getItem('lastname');
    this.admin = sessionStorage.getItem('role') === 'ADMIN';
    this.isdoctor = sessionStorage.getItem('role') === 'DOCTOR';
    this.appointmentService.getAppointment(this.patient, this.id, this.currentPage, this.pageSize)
      .subscribe(response => {
        // console.log(response);
        this.appointments = response.content;
        if (this.appointments && this.appointments.length === 0)
          this.flag = true;
        if (this.appointments && this.appointments.length < this.pageSize)
          this.lastpage = true;
        else
          this.lastpage = false;
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.listAppointment();
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.listAppointment();
    }
  }

  openDialog(details: any): void {
    const dialogRef = this.dialog.open(AppointmentCompComponent, {
      data: details,
      height: '600px',
      width: '700px',
    });
  }
}

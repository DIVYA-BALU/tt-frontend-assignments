import { Component, Inject } from '@angular/core';
import { AppointmentCompService } from './appointment-comp.service';
import Swal from 'sweetalert2';
import { DataService } from '../service/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-appointmentComp',
  templateUrl: './appointment-comp.component.html',
  styleUrls: ['./appointment-comp.component.css'],
})
export class AppointmentCompComponent {
  doctorId: string = '';
  patientId: any = sessionStorage.getItem('role') === 'PATIENT' ? sessionStorage.getItem('id') : '';
  doctorName: String = '';
  patientName: String = sessionStorage.getItem('role') === 'PATIENT' ? sessionStorage.getItem('firstname') + ' ' + sessionStorage.getItem('lastname') : '';
  dateTime: String = '';
  appointmentId = '';
  parentData: any = '';
  flag = true;
  constructor(private appointmentCompService: AppointmentCompService, private data: DataService,
    @Inject(MAT_DIALOG_DATA) public details: any, public dialogRef: MatDialogRef<AppointmentCompComponent>
  ) { }

  ngOnInit() {
    this.parentData = this.details;
    // this.data.currentMessage.subscribe((message) => (this.parentData = message));
    this.doctorId = this.parentData.doctorId;
    this.doctorName = this.parentData.doctorName;
    this.patientId = sessionStorage.getItem('role') === 'PATIENT' ? sessionStorage.getItem('id') : '';
    this.patientName = sessionStorage.getItem('role') === 'PATIENT' ? sessionStorage.getItem('firstname') + ' ' + sessionStorage.getItem('lastname') : '';
    if (this.parentData.from === 'update') {
      this.appointmentId = this.parentData.appointmentId;
      this.patientId = this.parentData.patientId;
      this.patientName = this.parentData.patientName;
      this.dateTime = this.parentData.time;
      this.flag = false;
    }
  }

  book() {
    this.appointmentCompService
      .save({
        doctorId: this.doctorId,
        doctorName: this.doctorName,
        patientId: this.patientId,
        patientName: this.patientName,
        time: JSON.stringify(this.dateTime).replaceAll('"', ''),
      })
      .subscribe({
        next: (response) => {
          // console.log(response);
          Swal.fire({
            title: 'Appointment Booked',
            text: 'Successfully',
            icon: 'success',
          });
        },
        error: (error) => {
          console.log(error);
          Swal.fire({
            title: 'Appointment Booking',
            text: 'Failed',
            icon: 'error',
          });
        },
      });
  }

  update() {
    this.appointmentCompService
      .update({
        appointmentId: this.appointmentId,
        doctorId: this.doctorId,
        doctorName: this.doctorName,
        patientId: this.patientId,
        patientName: this.patientName,
        time: JSON.stringify(this.dateTime).replaceAll('"', ''),
      })
      .subscribe({
        next: (response) => {
          // console.log(response);
          Swal.fire({
            title: 'Appointment Updated',
            text: 'Successfully',
            icon: 'success',
          });
        },
        error: (error) => {
          console.log(error);
          Swal.fire({
            title: 'Appointment Updation',
            text: 'Failed',
            icon: 'error',
          });
        },
      });
  }
  close(): void {
    this.dialogRef.close();
  }

  cancel() {
    history.go(-1);
  }
}

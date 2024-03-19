import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import {
  AppointmentStatus,
  AppointmentStatusDto,
  AppointmentUpdate,
} from '../models/models';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pending-doctor-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pending-doctor-request.component.html',
  styleUrls: ['./pending-doctor-request.component.scss'],
})
export class PendingDoctorRequestComponent {
  constructor(
    private veterinaryDoctorService: VeterinaryDoctorService,
    private authService: AuthService
  ) {}

  appointmentStatuses: AppointmentStatusDto[] = [];

  appointmentUpdate: AppointmentUpdate = {
    id: '',
    status: '',
    date: new Date(),
  };

  time = '';
  date = '';

  ngOnInit() {
    Swal.showLoading();

    this.authService.sharedId$.subscribe({
      next: (id) => {
        this.veterinaryDoctorService
          .getReceivedRequest(id, 'initiated')
          .subscribe({
            next: (val) => {
              Swal.close();
              this.appointmentStatuses = val;
            },
          });
      },
    });
  }

  loadData() {
    this.authService.sharedId$.subscribe({
      next: (id) => {
        this.veterinaryDoctorService
          .getReceivedRequest(id, 'initiated')
          .subscribe({
            next: (val) => {
              Swal.close();

              this.appointmentStatuses = val;
            },
          });
      },
    });
  }
  acceptAppointment(id: string, status: string) {
    this.appointmentUpdate.id = id;
    this.appointmentUpdate.status = status;
    this.appointmentUpdate.date = new Date(this.date + 'T' + this.time);
    if(status === 'accepted' && (this.date === '' ||  this.time==='')){
      Swal.fire({
        title: 'Invalid!',
        text: 'Please choose the appointment date and time',
        icon: 'error',
      })
      return;
    }Swal.showLoading();
    this.veterinaryDoctorService
      .updateAppointment(this.appointmentUpdate)
      .subscribe({
        next: (val) => {
          Swal.close();
          Swal.fire({
            title: 'Updated!',
            icon: 'success',
          }).then(()=>{

            this.loadData();
          })
         
        },
      });
  }
}

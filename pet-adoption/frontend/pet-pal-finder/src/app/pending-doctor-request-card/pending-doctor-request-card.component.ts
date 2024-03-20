import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { AppointmentStatusDto, AppointmentUpdate } from '../models/models';
import { AuthService } from '../service/auth.service';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pending-doctor-request-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  templateUrl: './pending-doctor-request-card.component.html',
  styleUrls: ['./pending-doctor-request-card.component.scss'],
})
export class PendingDoctorRequestCardComponent {
  constructor(
    private veterinaryDoctorService: VeterinaryDoctorService,
    private authService: AuthService
  ) {}
  private requestSubscription: Subscription = new Subscription();
  private updateSubscription: Subscription = new Subscription();
  private idSubscription: Subscription = new Subscription();

  @Input() appointmentStatus?: AppointmentStatusDto;

  minDate: Date = new Date();
  pending: boolean = true;

  appointmentUpdate: AppointmentUpdate = {
    id: '',
    status: '',
    date: new Date(),
  };

  time = '';
  date = '';

  acceptAppointment(id: string, status: string) {
    this.appointmentUpdate.id = id;
    this.appointmentUpdate.status = status;
    this.appointmentUpdate.date = new Date(this.date + 'T' + this.time);
    if (status === 'accepted' && (this.date === '' || this.time === '')) {
      Swal.fire({
        title: 'Invalid!',
        text: 'Please choose the appointment date and time',
        icon: 'error',
      });
      return;
    }
    Swal.showLoading();
    this.updateSubscription = this.veterinaryDoctorService
      .updateAppointment(this.appointmentUpdate)
      .subscribe({
        next: (val) => {
          Swal.close();
          this.pending = false;
          Swal.fire({
            title: 'Updated!',
            icon: 'success',
          }).then(() => {});
        },
      });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.requestSubscription.unsubscribe();
    this.updateSubscription.unsubscribe();
  }
}

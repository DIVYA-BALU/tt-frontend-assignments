import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { AppointmentStatusDto } from '../models/models';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { PendingDoctorRequestCardComponent } from '../pending-doctor-request-card/pending-doctor-request-card.component';

@Component({
  selector: 'app-pending-doctor-request',
  standalone: true,
  imports: [CommonModule, PendingDoctorRequestCardComponent],
  templateUrl: './pending-doctor-request.component.html',
  styleUrls: ['./pending-doctor-request.component.scss'],
})
export class PendingDoctorRequestComponent {
  constructor(
    private veterinaryDoctorService: VeterinaryDoctorService,
    private authService: AuthService
  ) {}
  private requestSubscription: Subscription = new Subscription();
  private idSubscription: Subscription = new Subscription();

  appointmentStatuses: AppointmentStatusDto[] = [];

  ngOnInit() {
    Swal.showLoading();
    this.loadData();
  }

  loadData() {
    this.idSubscription = this.authService.sharedId$.subscribe({
      next: (id) => {
        this.requestSubscription = this.veterinaryDoctorService
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

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.requestSubscription.unsubscribe();
  }
}

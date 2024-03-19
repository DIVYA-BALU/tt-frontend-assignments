import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { AppointmentStatus, AppointmentStatusDto } from '../models/models';
import { AuthService } from '../service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accepted-doctor-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accepted-doctor-request.component.html',
  styleUrls: ['./accepted-doctor-request.component.scss'],
})
export class AcceptedDoctorRequestComponent {
  constructor(
    private veterinaryDoctorService: VeterinaryDoctorService,
    private authService: AuthService
  ) {}

  appointmentStatuses: AppointmentStatusDto[] = [];
  private idSubscription: Subscription = new Subscription();
  private requestSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.idSubscription = this.authService.sharedId$.subscribe({
      next: (id) => {
        this.requestSubscription = this.veterinaryDoctorService
          .getReceivedRequest(id, 'accepted')
          .subscribe({
            next: (val) => {
              this.appointmentStatuses = val;
            },
          });
      },
    });
  }
  ngOnDestory() {
    this.idSubscription.unsubscribe();
    this.requestSubscription.unsubscribe();
  }
}

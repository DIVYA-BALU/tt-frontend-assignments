import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { AppointmentStatus } from '../models/models';

@Component({
  selector: 'app-pending-doctor-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-doctor-request.component.html',
  styleUrls: ['./pending-doctor-request.component.scss']
})
export class PendingDoctorRequestComponent {

  constructor(private veterinaryDoctorService:VeterinaryDoctorService, private authService:AuthService){}

  appointmentStatuses:AppointmentStatus [] = []

  ngOnInit(){
    this.authService.sharedId$.subscribe({
      next: (id) => {
        this.veterinaryDoctorService.getReceivedRequest(id).subscribe({
          next: (val) => {
           this.appointmentStatuses = val;
          }
        })
      }
    })
    
  }
}

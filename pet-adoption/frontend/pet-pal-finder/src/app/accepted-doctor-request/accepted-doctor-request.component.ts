import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { AppointmentStatus, AppointmentStatusDto } from '../models/models';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-accepted-doctor-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accepted-doctor-request.component.html',
  styleUrls: ['./accepted-doctor-request.component.scss']
})
export class AcceptedDoctorRequestComponent {

  constructor(private veterinaryDoctorService:VeterinaryDoctorService, private authService:AuthService){}

  appointmentStatuses:AppointmentStatusDto [] = [];

  ngOnInit(){
    this.authService.sharedId$.subscribe({
      next: (id) => {
        this.veterinaryDoctorService.getReceivedRequest(id,'accepted').subscribe({
          next: (val) => {
           this.appointmentStatuses = val;
          }
        })
      }
    })
    
  }
}

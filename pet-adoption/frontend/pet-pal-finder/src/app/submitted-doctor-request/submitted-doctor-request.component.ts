import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { AppointmentStatus } from '../models/models';
import { AuthService } from '../service/auth.service';
import { DateConverterPipe } from '../pipes/date-converter.pipe';

@Component({
  selector: 'app-submitted-doctor-request',
  standalone: true,
  imports: [CommonModule,DateConverterPipe],
  templateUrl: './submitted-doctor-request.component.html',
  styleUrls: ['./submitted-doctor-request.component.scss']
})
export class SubmittedDoctorRequestComponent {

  constructor(private veterinaryDoctorService:VeterinaryDoctorService,private authService:AuthService){}

  appointmentStatuses:AppointmentStatus[] = []

  date:Date = new Date()

  ngOnInit(){
    this.authService.sharedId$.subscribe({
      next: (id) => {
        this.veterinaryDoctorService.getRequestStatus(id).subscribe({
          next: (val) => {
            this.appointmentStatuses = val;
            
          }
        })
      }
    })
    
  }
}

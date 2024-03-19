import { Component, Input } from '@angular/core';
import { RegistrationRequestService } from '../service/registration-request.service';
import { StatusUpdate, VeterinaryDoctor } from '../models/models';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-registration-request-card',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './doctor-registration-request-card.component.html',
  styleUrls: ['./doctor-registration-request-card.component.scss']
})
export class DoctorRegistrationRequestCardComponent {
  @Input() requestVeterinaryDoctor?: VeterinaryDoctor;
  constructor(private registrationRequestService: RegistrationRequestService) {}

  status: StatusUpdate = {
    id: '',
    status: 'pending',
  };
  currentStatus:string = 'pending'

  
  updateStatus(id: string | undefined, status: string) {
    this.status.id = id || '';
    this.status.status = status;
    Swal.showLoading()
      this.registrationRequestService
        .updateStatusForVeterinaryDoctor(this.status)
        .subscribe({ next: (message) => {
          this.currentStatus = status;
          Swal.fire({
            title: status,
            icon: 'success',
          });
        } });
  }

  veterinaryDoctors: VeterinaryDoctor[] = [];

  ngOnInit() {
    this.registrationRequestService.viweRequestedVeterinaryDoctor().subscribe({
      next: (res) => {
        this.veterinaryDoctors = res;
      },
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { VeterinaryDoctor, StatusUpdate, Organization } from '../models/models';
import { RegistrationRequestService } from '../service/registration-request.service';

@Component({
  selector: 'app-organization-registration-request-card',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './organization-registration-request-card.component.html',
  styleUrls: ['./organization-registration-request-card.component.scss']
})
export class OrganizationRegistrationRequestCardComponent {

  @Input() requestOrganization?: Organization;
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
    .updateStatusForOrganization(this.status)
        .subscribe({ next: (message) => {
          this.currentStatus = status;
          Swal.fire({
            title: status,
            icon: 'success',
          });
        } });
  }

  organizations: Organization[] = [];

  ngOnInit() {
    this.registrationRequestService.viweRequestedOrganization().subscribe({
      next: (res) => {
        this.organizations = res;
      },
    });
  }
  
}

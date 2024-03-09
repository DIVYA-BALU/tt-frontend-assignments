import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization, StatusUpdate, VeterinaryDoctor } from '../models/models';
import { RegistrationRequestService } from '../service/registration-request.service';

@Component({
  selector: 'app-request-registration-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request-registration-list.component.html',
  styleUrls: ['./request-registration-list.component.scss'],
})
export class RequestRegistrationListComponent {
  constructor(private registrationRequestService: RegistrationRequestService) {}

  @Input() requestVeterinaryDoctor?: VeterinaryDoctor;
  @Input() requestOrganization?: Organization;
  @Input() type: string = '';
  status: StatusUpdate = {
    id: '',
    status: '',
  };

  updateStatus(id: string | undefined, status: string) {
    this.status.id = id || '';
    this.status.status = status;
    if (this.type === 'organization') {
      this.registrationRequestService
        .updateStatusForOrganization(this.status)
        .subscribe({ next: (message) => {} });
    } else {
      this.registrationRequestService
        .updateStatusForVeterinaryDoctor(this.status)
        .subscribe({ next: (message) => {} });
    }
  }
}

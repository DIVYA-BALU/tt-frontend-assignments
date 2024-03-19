import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization, VeterinaryDoctor } from '../models/models';
import { MatTabsModule } from '@angular/material/tabs';
import { RequestRegistrationListComponent } from '../request-registration-list/request-registration-list.component';
import { RegistrationRequestService } from '../service/registration-request.service';
import { DoctorRegistrationRequestCardComponent } from '../doctor-registration-request-card/doctor-registration-request-card.component';
import { OrganizationRegistrationRequestCardComponent } from '../organization-registration-request-card/organization-registration-request-card.component';
import { AdminNavBarComponent } from "../admin-nav-bar/admin-nav-bar.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    imports: [CommonModule, MatTabsModule, RequestRegistrationListComponent, DoctorRegistrationRequestCardComponent, OrganizationRegistrationRequestCardComponent, AdminNavBarComponent]
})
export class AdminComponent {
  constructor(private registrationRequestService: RegistrationRequestService) {}

  organizations: Organization[] = [];

  veterinaryDoctors: VeterinaryDoctor[] = [];

  ngOnInit() {
    this.registrationRequestService.viweRequestedOrganization().subscribe({
      next: (res) => {
        this.organizations = res;
      },
    });
    this.registrationRequestService.viweRequestedVeterinaryDoctor().subscribe({
      next: (res) => {
        this.veterinaryDoctors = res;
      },
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization, VeterinaryDoctor } from '../models/models';
import { MatTabsModule } from '@angular/material/tabs';
import { RegistrationRequestService } from '../service/registration-request.service';
import { DoctorRegistrationRequestCardComponent } from '../doctor-registration-request-card/doctor-registration-request-card.component';
import { OrganizationRegistrationRequestCardComponent } from '../organization-registration-request-card/organization-registration-request-card.component';
import { AdminNavBarComponent } from '../admin-nav-bar/admin-nav-bar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  imports: [
    CommonModule,
    MatTabsModule,
    DoctorRegistrationRequestCardComponent,
    OrganizationRegistrationRequestCardComponent,
    AdminNavBarComponent,
  ],
})
export class AdminComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SubmittedAdoptionRequestComponent } from '../submitted-adoption-request/submitted-adoption-request.component';
import { SubmittedDoctorRequestComponent } from '../submitted-doctor-request/submitted-doctor-request.component';
import { RecivedDoctorRequestComponent } from '../recived-doctor-request/recived-doctor-request.component';
import { AdopterAccessDirective } from '../directives/adopter-access.directive';
import { VeterinaryDoctorAccessDirective } from '../directives/veterinary-doctor-access.directive';

@Component({
  selector: 'app-view-request-status',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    SubmittedAdoptionRequestComponent,
    SubmittedDoctorRequestComponent,
    RecivedDoctorRequestComponent,
    AdopterAccessDirective,
    VeterinaryDoctorAccessDirective
  ],
  templateUrl: './view-request-status.component.html',
  styleUrls: ['./view-request-status.component.scss'],
})
export class ViewRequestStatusComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRegistrationRequestService } from '../service/view-registration-request.service';
import { Organization, VeterinaryDoctor } from '../models/models';
import { MatTabsModule } from '@angular/material/tabs';
import { ReportListComponent } from '../report-list/report-list.component';
import { RequestRegistrationListComponent } from '../request-registration-list/request-registration-list.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,MatTabsModule,RequestRegistrationListComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private viewRegistrationRequestService:ViewRegistrationRequestService){}

  organizations:Organization[] = [];

  veterinaryDoctors:VeterinaryDoctor[] = [];

  ngOnInit(){
    this.viewRegistrationRequestService.viweRequestedOrganization().subscribe({next: (res) => {
      console.log(res);
      
      this.organizations = res;
    }})
    this.viewRegistrationRequestService.viweRequestedVeterinaryDoctor().subscribe({next: (res) => {
      console.log(res);
      
      this.veterinaryDoctors = res;
    }})
  }
}

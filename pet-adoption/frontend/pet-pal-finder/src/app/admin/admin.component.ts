import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization, VeterinaryDoctor } from '../models/models';
import { MatTabsModule } from '@angular/material/tabs';
import { RequestRegistrationListComponent } from '../request-registration-list/request-registration-list.component';
import { RegistrationRequestService } from '../service/registration-request.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,MatTabsModule,RequestRegistrationListComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private registrationRequestService:RegistrationRequestService){}

  organizations:Organization[] = [];

  veterinaryDoctors:VeterinaryDoctor[] = [];

  ngOnInit(){
    this.registrationRequestService.viweRequestedOrganization().subscribe({next: (res) => {
      console.log(res);
      
      this.organizations = res;
    }})
    this.registrationRequestService.viweRequestedVeterinaryDoctor().subscribe({next: (res) => {
      console.log(res);
      
      this.veterinaryDoctors = res;
    }})
  }
}

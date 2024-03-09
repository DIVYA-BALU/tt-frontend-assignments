import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { PetPostComponent } from '../pet-post/pet-post.component';
import { RecivedAdoptionRequestComponent } from '../recived-adoption-request/recived-adoption-request.component';
import { AcceptedAdoptionRequestComponent } from '../accepted-adoption-request/accepted-adoption-request.component';

import { OrganizationProfileComponent } from '../organization-profile/organization-profile.component';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    PetPostComponent,
    RecivedAdoptionRequestComponent,
    AcceptedAdoptionRequestComponent,
    OrganizationProfileComponent,
  ],
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent {}

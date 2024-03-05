import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../service/profile.service';
import { AdopterProfileComponent } from '../adopter-profile/adopter-profile.component';
import { VeterinaryDoctorProfileComponent } from '../veterinary-doctor-profile/veterinary-doctor-profile.component';
import { ProfileDetailsComponent } from '../authentication/profile-details/profile-details.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,AdopterProfileComponent,VeterinaryDoctorProfileComponent,ProfileDetailsComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private profileService:ProfileService){}
  user:string='';

  ngOnInit(){
    this.profileService.sharedUser$.subscribe({
      next: (user) => {
        if ('isSubscribed' in user) {
          this.user = 'veterinary_doctor';
      }
      else{
        this.user = 'adopter';
      }
      }
    })
  }
}

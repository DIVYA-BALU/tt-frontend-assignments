import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../service/profile.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Adopter, Organization, VeterinaryDoctor } from '../models/models';

@Component({
  selector: 'app-requester-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './requester-profile.component.html',
  styleUrls: ['./requester-profile.component.scss'],
})
export class RequesterProfileComponent {
  constructor(
    public dialogRef: MatDialogRef<RequesterProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: string; id: string },
    private profileService: ProfileService
  ) {}

  profile: Adopter | VeterinaryDoctor | undefined;

  ngOnInit() {
    if (this.data.type === 'adopter') {
      this.profileService.getAdopterProfile(this.data.id).subscribe({
        next: (val) => {
          this.profile = val;
        },
      });
    } else {
      this.profileService.getVeterinaryDoctorProfile(this.data.id).subscribe({
        next: (val) => {
          this.profile = val;
        },
      });
    }
  }
}

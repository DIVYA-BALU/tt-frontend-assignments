import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Adopter } from '../models/models';
import { ProfileService } from '../service/profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}
  loggedIn: boolean = false;
  isAdopter: boolean = false;
  activeLink: string | null = null;

  profileName: string = '';
  profileUrl: string = '';

  adopter: Adopter = {
    _id: '',
    name: '',
    email: '',
    profilePhoto: '',
    occupation: '',
    location: {
      doorNo: '',
      street: '',
      city: '',
      district: '',
      state: '',
      country: '',
    },
    contactNumber: 0,
    dob: new Date(),
  };

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  ngOnInit() {
    this.loggedIn = this.authService.isAuthenticated();
    if (this.loggedIn) {
      this.authService.sharedId$.subscribe({
        next: (id) => {
          console.log('auth ', id);

          if (this.authService.hasAccess(environment.adopter)) {
            this.profileService.getAdopterProfile(id).subscribe({
              next: (obj) => {
                console.log(obj);
                this.profileName = obj.name;
                this.profileUrl = obj.profilePhoto;
                this.adopter = obj;
                this.profileService.setUser(obj);
              },
            });
          } else if (this.authService.hasAccess(environment.veterinaryDoctor)) {
            this.profileService.getVeterinaryDoctorProfile(id).subscribe({
              next: (obj) => {
                console.log(obj);
                this.profileName = obj.name;
                this.profileUrl = obj.profilePhoto;
                // this.adopter = obj;
                this.profileService.setUser(obj);
              },
            });
          }
        },
      });
      this.profileService.sharedUser$.subscribe({
        next: (val) => {
          console.log(val);
        },
      });
      this.isAdopter = this.authService.hasAccess('ROLE_ADOPTER');
    }
  }
}

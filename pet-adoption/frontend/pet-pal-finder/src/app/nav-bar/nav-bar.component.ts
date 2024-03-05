import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Adopter } from '../models/models';
import { ProfileService } from '../service/profile.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { LoginAlertService } from '../service/login-alert.service';
import { ImagePathConverterPipe } from "../pipes/image-path-converter.pipe";

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    imports: [CommonModule, RouterModule, ImagePathConverterPipe]
})
export class NavBarComponent {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private loginAlertService:LoginAlertService,
    private router:Router
  ) {}
  loggedIn: boolean = false;
  isVeterinaryDoctor: boolean = false;
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
    if(link === 'status' && !this.authService.isAuthenticated()){
      this.loginAlertService.requestLogin();
    }else if(link === 'status'){
      this.router.navigate(['pet/requests']);
    }
    this.activeLink = link;
  }

  ngOnInit() {
    this.authService.sharedIsLoggedIn$.subscribe({
      next: (val) => {
        this.loggedIn = val
      }
    });
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
      this.isVeterinaryDoctor = this.authService.hasAccess(environment.veterinaryDoctor);
    }
  }
}

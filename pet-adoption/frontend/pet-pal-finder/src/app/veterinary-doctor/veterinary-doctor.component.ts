import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentStatus, VeterinaryDoctor } from '../models/models';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginAlertService } from '../service/login-alert.service';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-veterinary-doctor',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './veterinary-doctor.component.html',
  styleUrls: ['./veterinary-doctor.component.scss'],
})
export class VeterinaryDoctorComponent {
  constructor(
    private veterinaryDoctorService: VeterinaryDoctorService,
    private authService: AuthService,
    private router: Router,
    private loginAlert: LoginAlertService
  ) {}
  private idSubscription: Subscription = new Subscription();
  private getUpdateSubscription: Subscription = new Subscription();
  private getSubscription: Subscription = new Subscription();
  private nameSearchSubscription: Subscription = new Subscription();
  private citySearchSubscription: Subscription = new Subscription();
  private requestSubscription: Subscription = new Subscription();

  name: string = '';

  city: string = '';
  page: number = 0;
  names: string[] = [];
  cites: string[] = [];
  veterinaryDoctors: VeterinaryDoctor[] = [];

  appointment: AppointmentStatus = {
    _id: null,
    doctorId: {
      _id: '',
      name: '',
      profilePhoto: '',
      email: '',
      location: {
        doorNo: '',
        street: '',
        city: '',
        district: '',
        state: '',
        country: '',
      },
      degree: '',
      degreeCertificate: '',
      contactNumber: 0,
      status: '',
      isSubscribed: false,
    },
    requesterId: '',
    requesterType: '',
    reason: '',
    status: 'initiated',
    requestedDate: null,
    acceptOrRejectedDate: null,
    appointmentDate: null,
  };

  isLoading: boolean = false;
  id: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const documentHeight = document.body.scrollHeight;
    if (scrollPosition + windowHeight >= documentHeight) {
      this.loadData();
    }
  }

  loadData() {
    this.page++;

    this.getUpdateSubscription = this.veterinaryDoctorService
      .getNearByDoctors(this.name, this.city, this.page)
      .subscribe({
        next: (val) => {
          this.veterinaryDoctors = [...this.veterinaryDoctors, ...val];
        },
      });
  }

  search() {
    this.page = 0;
    this.getSubscription = this.veterinaryDoctorService
      .getNearByDoctors(this.name, this.city, this.page)
      .subscribe({
        next: (val) => {
          this.veterinaryDoctors = val;
        },
      });
  }

  getNames() {
    this.nameSearchSubscription = this.veterinaryDoctorService
      .getSearchInput('name', this.name)
      .subscribe({
        next: (val) => {
          this.names = val;
        },
      });
  }
  getcity() {
    this.nameSearchSubscription = this.veterinaryDoctorService
      .getSearchInput('city', this.city)
      .subscribe({
        next: (val) => {
          this.cites = val;
        },
      });
  }

  ngOnInit() {
    this.search();
  }

  async sendRequest(id: string) {
    if (this.authService.isAuthenticated()) {
      const { value: reason } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Reason',
        confirmButtonColor: '#ffd740',
        confirmButtonText: 'Request',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here',
        },
        showCancelButton: true,
      });
      if (reason) {
        this.appointment.doctorId._id = id;
        this.appointment.requestedDate = new Date();
        this.appointment.reason = reason;
        if (this.authService.hasAccess('ROLE_ADOPTER')) {
          this.appointment.requesterType = 'ADOPTER';
        } else {
          this.appointment.requesterType = 'ORGANIZATION';
        }
        this.idSubscription = this.authService.sharedId$.subscribe({
          next: (id) => {
            this.appointment.requesterId = id;
          },
        });

        this.requestSubscription = this.veterinaryDoctorService
          .requestAppointment(this.appointment)
          .subscribe({
            next: () => {
              Swal.fire({
                title: 'Request Send',
                confirmButtonColor: '#ffd740',
                icon: 'success',
              });
            },
            error: (error) => {
              Swal.fire({
                title: 'Request Not Send',
                confirmButtonColor: '#ffd740',
                icon: 'error',
              });
            },
          });
      }else{
        Swal.fire({
          title: 'Request Not Send',
          text: 'Please fill the reason',
          confirmButtonColor: '#ffd740',
          icon: 'error',
        });
      }
    } else {
      this.loginAlert.requestLogin();
    }
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.getUpdateSubscription.unsubscribe();
    this.getSubscription.unsubscribe();
    this.nameSearchSubscription.unsubscribe();
    this.citySearchSubscription.unsubscribe();
    this.requestSubscription.unsubscribe();
  }
}

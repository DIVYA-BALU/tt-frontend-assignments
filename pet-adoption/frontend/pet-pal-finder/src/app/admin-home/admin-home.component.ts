import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminServiceService } from '../service/admin-service.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {
  Adopter,
  Organization,
  UserDto,
  VeterinaryDoctor,
} from '../models/models';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../service/profile.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { Subscription } from 'rxjs';
declare let Plotly: any;

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  constructor(
    private adminService: AdminServiceService,
    private profileService: ProfileService
  ) {}
  email: string = '';
  role: string = 'All';
  page: number = 0;
  pageSize: number = 10;
  displayedColumns: string[] = ['email', 'role'];
  url: string = '';
  year: number = 2022;
  roles: string[] = ['All', 'Adopter', 'Veterinary Doctor', 'Organization'];
  private userSubscription: Subscription = new Subscription();
  private adopterProfileSubscription: Subscription = new Subscription();
  private doctorProfileSubscription: Subscription = new Subscription();
  private organizationProfileSubscription: Subscription = new Subscription();
  private yearSubscription: Subscription = new Subscription();
  private monthSubscription: Subscription = new Subscription();

  userDetail: VeterinaryDoctor | Adopter | Organization = {
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
  };

  users: UserDto[] = [];
  length: number = 0;

  viewProfile(row: any) {
    console.log(row);
    if (row.role === 'ADOPTER') {
      this.adopterProfileSubscription = this.profileService
        .getAdopterProfile(row.profileId)
        .subscribe({
          next: (val) => {
            this.userDetail = val;
            console.log(val);
            if ('profilePhoto' in val) {
              this.url = val.profilePhoto;
            }
          },
        });
    } else if (row.role === 'ORGANIZATION') {
      this.organizationProfileSubscription = this.profileService
        .getOrganizationProfile(row.profileId)
        .subscribe({
          next: (val) => {
            this.userDetail = val;
            if ('organizationPhoto' in val) {
              this.url = val.organizationPhoto;
            }

            console.log(val);
          },
        });
    } else if (row.role === 'VETERINARY_DOCTOR') {
      this.doctorProfileSubscription = this.profileService
        .getVeterinaryDoctorProfile(row.profileId)
        .subscribe({
          next: (val) => {
            console.log(val);
            if ('profilePhoto' in val) {
              this.url = val.profilePhoto;
            }
            this.userDetail = val;
          },
        });
    }
    console.log(this.userDetail);
  }
  reload(event: PageEvent) {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUser(this.role);
  }

  loadUser(role: any) {
    console.log(role);
    if (this.role === 'Veterinary Doctor') {
      this.role = 'Veterinary_Doctor';
    }

    this.userSubscription = this.adminService
      .getUserList(this.email, this.role, this.page, this.pageSize)
      .subscribe({
        next: (val) => {
          this.users = val.user;
          this.length = val.count;
        },
      });
  }

  loadMonthChart() {
    this.monthSubscription = this.adminService
      .getMonthWiseRevenue(this.year)
      .subscribe({
        next: (values) => {
          const label: number[] = [];
          const value: number[] = [];
          values.map((val) => {
            value.push(val.revenue);
            label.push(val.month);
          });
          var data = [
            {
              values: value,
              labels: label,
              type: 'pie',
              showlegend: false,
            },
          ];

          var layout = {
            height: 500,
            width: 600,
          };

          Plotly.newPlot('month-chart', data, layout);
        },
      });
  }

  ngOnInit() {
    this.loadUser(this.role);
    this.loadMonthChart();
    this.yearSubscription = this.adminService.getYearWiseRevenue().subscribe({
      next: (values) => {
        const label: number[] = [];
        const value: number[] = [];
        values.map((val) => {
          value.push(val.revenue);
          label.push(val.year);
        });
        var data = [
          {
            values: value,
            labels: label,
            type: 'pie',
          },
        ];

        var layout = {
          height: 500,
          width: 600,
        };

        Plotly.newPlot('year-chart', data, layout).then(
          (chart: {
            on: (arg0: string, arg1: (event: any) => void) => void;
          }) => {
            chart.on(
              'plotly_click',
              (event: { points: { pointNumber: any }[] }) => {
                const pointIndex = event.points[0].pointNumber;
                const label = data[0].labels[pointIndex];
                console.log('Clicked on:', label);
                this.year = label;
                this.loadMonthChart();
              }
            );
          }
        );
      },
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.adopterProfileSubscription.unsubscribe();
    this.organizationProfileSubscription.unsubscribe();
    this.doctorProfileSubscription.unsubscribe();
    this.yearSubscription.unsubscribe();
    this.monthSubscription.unsubscribe();
  }
}

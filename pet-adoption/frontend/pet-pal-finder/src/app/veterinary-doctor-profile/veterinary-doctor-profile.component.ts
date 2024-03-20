import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../service/profile.service';
import {
  Adopter,
  PreviousSubscription,
  SubscriptionTransaction,
  VeterinaryDoctor,
} from '../models/models';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PaymentService } from '../service/payment.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { SubscriptionPaymentComponent } from '../subscription-payment/subscription-payment.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-veterinary-doctor-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
  ],
  templateUrl: './veterinary-doctor-profile.component.html',
  styleUrls: ['./veterinary-doctor-profile.component.scss'],
})
export class VeterinaryDoctorProfileComponent {
  user: VeterinaryDoctor = {
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

  private idSubscription: Subscription = new Subscription();
  private getSubscription: Subscription = new Subscription();
  private updateSubscription: Subscription = new Subscription();
  private userSubscription: Subscription = new Subscription();

  subscription: SubscriptionTransaction = {
    _id: null,
    currentPlan: {
      _id: '',
      amount: 0,
      months: 0,
    },
    subscribedOn: new Date(),
    validTill: new Date(),
    paymentId: '',
    subscriberId: '',
    history: null,
  };

  historys: PreviousSubscription[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService,
    private paymentService: PaymentService,
    public dialog: MatDialog
  ) {}
  profile: File | null = null;
  imgUrl: string = '';

  formResponse: FormGroup = this.formBuilder.group({
    name: [this.user.name, [Validators.required, Validators.minLength(1)]],
    email: [this.user.email, [Validators.email]],
    profilePhoto: [],
    location: this.formBuilder.group({
      doorNo: [
        this.user.location.doorNo,
        [Validators.required, Validators.minLength(1)],
      ],
      street: [
        this.user.location.street,
        [Validators.required, Validators.minLength(1)],
      ],
      city: [
        this.user.location.city,
        [Validators.required, Validators.minLength(1)],
      ],
      district: [
        this.user.location.district,
        [Validators.required, Validators.minLength(1)],
      ],
      state: [
        this.user.location.state,
        [Validators.required, Validators.minLength(1)],
      ],
      country: [
        this.user.location.country,
        [Validators.required, Validators.minLength(1)],
      ],
    }),
    contactNumber: [
      this.user.contactNumber,
      [Validators.required, Validators.minLength(1)],
    ],
    image: [],
  });

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(SubscriptionPaymentComponent, {
      width: '150vh',
      height: '90vh',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {},
    });
  }

  getProfile(event: any) {
    this.profile = event.target.files[0];
    this.user.profilePhoto = URL.createObjectURL(event.target.files[0]);
  }

  register() {
    if (this.formResponse.invalid) {
      Swal.fire({
        title: 'Invalid Input!',
        text: 'Please fill all the details appropriately',
        icon: 'error',
      });
      return;
    }
    const formData: FormData = new FormData();
    formData.append('name', this.formResponse.value.name);
    formData.append(
      'profilePhoto',
      this.profile === null ? new Blob([]) : this.profile
    );
    formData.append('occupation', this.formResponse.value.occupation);
    formData.append('dob', this.formResponse.value.dob);
    formData.append('location.doorNo', this.formResponse.value.location.doorNo);
    formData.append('location.street', this.formResponse.value.location.street);
    formData.append('location.city', this.formResponse.value.location.city);
    formData.append(
      'location.district',
      this.formResponse.value.location.district
    );
    formData.append('location.state', this.formResponse.value.location.state);
    formData.append(
      'location.country',
      this.formResponse.value.location.country
    );
    formData.append('contactNumber', this.formResponse.value.contactNumber);
    formData.append('status', this.user.status);
    formData.append('isSubscribed', this.user.isSubscribed ? 'true' : 'false');

    this.idSubscription = this.authService.sharedId$.subscribe({
      next: (id) => {
        formData.append('id', id);
        this.updateSubscription = this.profileService
          .updateVeterinaryDoctorProfile(formData)
          .subscribe({
            next: (res) => {
              Swal.fire({
                title: 'Updated!',
                icon: 'success',
              });
            },
          });
      },
    });
  }

  logout() {
    localStorage.clear();
    this.authService.logout();
    this.router.navigate(['pet']);
  }

  payment() {
    this.openDialog('30ms', '30ms');
  }
  ngOnInit() {
    this.userSubscription = this.profileService.sharedUser$.subscribe({
      next: (user) => {
        if ('isSubscribed' in user) {
          this.user = user;

          this.formResponse = this.formBuilder.group({
            name: [
              this.user.name,
              [Validators.required, Validators.minLength(1)],
            ],
            email: [this.user.email, [Validators.email]],
            profilePhoto: [],
            location: this.formBuilder.group({
              doorNo: [
                this.user.location.doorNo,
                [Validators.required, Validators.minLength(1)],
              ],
              street: [
                this.user.location.street,
                [Validators.required, Validators.minLength(1)],
              ],
              city: [
                this.user.location.city,
                [Validators.required, Validators.minLength(1)],
              ],
              district: [
                this.user.location.district,
                [Validators.required, Validators.minLength(1)],
              ],
              state: [
                this.user.location.state,
                [Validators.required, Validators.minLength(1)],
              ],
              country: [
                this.user.location.country,
                [Validators.required, Validators.minLength(1)],
              ],
            }),
            contactNumber: [
              this.user.contactNumber,
              [Validators.required, Validators.minLength(1)],
            ],
            image: [],
          });
        }
      },
    });
    this.getSubscription = this.paymentService
      .getSubscription(this.user._id)
      .subscribe({
        next: (val) => {
          console.log(val);

          this.subscription = val;
        },
      });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.getSubscription.unsubscribe();
    this.updateSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}

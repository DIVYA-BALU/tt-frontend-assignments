import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PendingDoctorRequestComponent } from '../pending-doctor-request/pending-doctor-request.component';
import { AcceptedDoctorRequestComponent } from '../accepted-doctor-request/accepted-doctor-request.component';
import { PaymentService } from '../service/payment.service';
import { ProfileService } from '../service/profile.service';
import { Adopter, Organization, VeterinaryDoctor } from '../models/models';
import { SubscriptionPaymentComponent } from '../subscription-payment/subscription-payment.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import {MatDatepickerModule} from '@angular/material/datepicker';
declare const Razorpay: any;

@Component({
  selector: 'app-recived-doctor-request',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDatepickerModule,
    PendingDoctorRequestComponent,
    AcceptedDoctorRequestComponent,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './recived-doctor-request.component.html',
  styleUrls: ['./recived-doctor-request.component.scss'],
})
export class RecivedDoctorRequestComponent {
  isSubscribed: boolean = false;

  private idSubscription: Subscription = new Subscription();
  currentTab: string = 'pending';
  tabChange(tab: string) {
    this.currentTab = tab;
  }
  constructor(
    private paymentService: PaymentService,
    private profileService: ProfileService,
    public dialog: MatDialog
  ) {}

  click() {
    this.openDialog('30ms', '30ms');
  }

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

  ngOnInit() {
    this.idSubscription = this.profileService.sharedUser$.subscribe({
      next: (user: VeterinaryDoctor | Adopter | Organization) => {
        if ('isSubscribed' in user) {
          this.isSubscribed = user.isSubscribed;
        }
      },
    });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessSnackBarComponent } from '../success-snack-bar/success-snack-bar.component';
import { FailureSnackBarComponent } from '../failure-snack-bar/failure-snack-bar.component';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { Router } from '@angular/router';
import { SubscriptionPageService } from '../user/subscription-page/subscription-page.service';

declare var Razorpay: any;

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {
  durationInSeconds = 5;
  currentDate: Date = new Date();

  constructor(
    private subscriptionService: SubscriptionPageService,
    private _snackBar: MatSnackBar,
    private sharedService: SharedServiceService,
    private route: Router
  ) {}

  onPay() {
    const RazorpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: 30000,
      key: 'rzp_test_KakeVejLALLeSY',
      theme: {
        color: '#3399cc',
      },
      handler: (response: any) => {
        if (response.razorpay_payment_id) {
          this.subscriptionService
            .createTransaction(response.razorpay_payment_id)
            .subscribe((data) => {
              this.openSuccessSnackBar();
              localStorage.setItem("suscribedEndDate", JSON.stringify(data.endDate));
              this.sharedService.setSubscribed();
              this.route.navigate(['/user/mySubscription']);
            });
        } else {
          this.openFailureSnackBar();
        }
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        },
      },
    };

    Razorpay.open(RazorpayOptions);
  }

  openSuccessSnackBar() {
    this._snackBar.openFromComponent(SuccessSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openFailureSnackBar() {
    this._snackBar.openFromComponent(FailureSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

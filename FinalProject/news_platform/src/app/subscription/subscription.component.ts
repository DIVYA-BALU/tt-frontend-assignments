import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { Router } from '@angular/router';
import { SubscriptionPageService } from '../user/subscription-page/subscription-page.service';
import { Subscription } from 'rxjs';

declare var Razorpay: any;

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnDestroy {
  durationInSeconds = 5;
  currentDate: Date = new Date();
  subscription: Subscription = new Subscription();

  constructor(
    private subscriptionService: SubscriptionPageService,
    private sharedService: SharedServiceService,
    private route: Router
  ) {}

  onPay() {
    const RazorpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: 13300,
      key: 'rzp_test_KakeVejLALLeSY',
      theme: {
        color: '#3399cc',
      },
      handler: (response: any) => {
        if (response.razorpay_payment_id) {
          this.subscription = this.subscriptionService
            .createTransaction(response.razorpay_payment_id)
            .subscribe((data) => {
              localStorage.setItem('subscribed', 'true');
              localStorage.setItem(
                'suscribedEndDate',
                JSON.stringify(data.endDate)
              );
              this.sharedService.setSubscribed();
              this.route.navigate(['/user/mySubscription']);
            });
        } else {
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

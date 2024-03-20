import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionPageService } from './subscription-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  displayedColumns: string[] = ['paymentId', 'startDate', 'endDate'];
  dataSource: any = [];

  constructor(private subscriptionpageService: SubscriptionPageService) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.subscription = this.subscriptionpageService
      .getTransaction()
      .subscribe((data) => {
        this.dataSource = [data];
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

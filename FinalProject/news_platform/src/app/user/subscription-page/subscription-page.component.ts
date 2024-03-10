import {
  Component, OnInit,
} from '@angular/core';
import { SubscriptionPageService } from './subscription-page.service';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent implements OnInit {

  displayedColumns: string[] = ['paymentId', 'startDate', 'endDate'];
  dataSource: any = [];
  
  constructor(private subscriptionpageService: SubscriptionPageService){}

  ngOnInit(): void {
      this.getDetails();
  }

  getDetails(){
    this.subscriptionpageService.getTransaction().subscribe((data) => {
      this.dataSource = [data];
    })
  }
}

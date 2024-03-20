import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayShortReadsService } from './display-short-reads.service';
import { ShortReads } from 'src/app/model/ShortReads';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-short-reads',
  templateUrl: './display-short-reads.component.html',
  styleUrls: ['./display-short-reads.component.scss'],
})
export class DisplayShortReadsComponent implements OnInit, OnDestroy {
  shortReadsId: string = '';
  shortReads!: ShortReads;
  isSubscribed!: boolean;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private displayService: DisplayShortReadsService,
    private sharedService: SharedServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe((_value) => {
        this.shortReadsId = _value['id'];
        this.getShortReads();
      })
    );
  }

  getShortReads() {
    this.subscriptions.push(
      this.displayService.getShortReads(this.shortReadsId).subscribe((data) => {
        if (data) {
          this.shortReads = data;
          this.increaseViews();
        }

        this.sharedService.subscribedValueData$.subscribe((data) => {
          const date1 = new Date(this.shortReads.date);
          const date2 = new Date();

          const areDatesEqual = date1.getDate() === date2.getDate();
          const areMonthEqual = date1.getMonth() === date2.getMonth();
          const areYearEqual = date1.getFullYear() === date2.getFullYear();

          if (
            data === false &&
            areDatesEqual &&
            areMonthEqual &&
            areYearEqual
          ) {
            this.isSubscribed = false;
          } else {
            this.isSubscribed = true;
          }
        });
      })
    );
  }

  increaseViews() {
    this.displayService.increaseViews(this.shortReadsId);
  }

  onClick() {
    this.router.navigate(['/subscription']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}

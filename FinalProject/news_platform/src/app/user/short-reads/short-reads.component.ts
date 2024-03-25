import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ShortReads } from 'src/app/model/ShortReads';
import { HomeService } from '../home/home.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-short-reads',
  templateUrl: './short-reads.component.html',
  styleUrls: ['./short-reads.component.scss'],
})
export class ShortReadsComponent implements OnDestroy, OnInit {
  subscription: Subscription = new Subscription();
  shortReads: ShortReads[] = [];
  pageIndex: number = 0;

  constructor(
    private homeService: HomeService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.getShortReads(this.pageIndex, 5);
    this.sharedService.setBadge(false);
  }

  getShortReads(pageIndex: number, pageSize: number) {
    this.subscription = this.homeService
      .getShortReads(pageIndex, pageSize)
      .subscribe((data) => {
        data.content.forEach((data) => {
          this.shortReads.push(data);          
        });
        console.log(data);
        
        console.log(this.shortReads);
      });
  }

 onScroll = () => {
    console.log("scroll");
    this.getShortReads(++this.pageIndex, 5);
  }

  loadMore() {
    this.getShortReads(++this.pageIndex, 5);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

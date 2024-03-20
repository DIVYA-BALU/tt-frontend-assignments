import { Component, OnDestroy } from '@angular/core';
import { News } from 'src/app/model/News';
import { HomeService } from '../home/home.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
})
export class TopNewsComponent implements OnDestroy {
  subscription: Subscription = new Subscription();
  newsContents!: News[];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.showSpinner();
    this.getTopNews();
  }

  getTopNews() {
    this.subscription = this.homeService.getTopNews().subscribe((data) => {
      this.newsContents = data;
      console.log(this.newsContents);
    });
  }

  spinner!: boolean;

  showSpinner() {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

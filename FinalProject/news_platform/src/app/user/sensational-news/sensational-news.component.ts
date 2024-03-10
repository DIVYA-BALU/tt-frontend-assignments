import { Component } from '@angular/core';
import { News } from 'src/app/model/News';
import { SensationalNewsService } from './sensational-news.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';

@Component({
  selector: 'app-sensational-news',
  templateUrl: './sensational-news.component.html',
  styleUrls: ['./sensational-news.component.scss'],
})
export class SensationalNewsComponent {
  newsContents!: News[];

  constructor(
    private sensationalnewsService: SensationalNewsService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.showSpinner();
    this.getSensationalNews();
    this.sharedService.setBadge(false);
  }

  getSensationalNews() {
    this.sensationalnewsService.getSensationalNews().subscribe((data) => {
      this.newsContents = data;
    });
  }

  spinner!: boolean;

  showSpinner() {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
  }
}

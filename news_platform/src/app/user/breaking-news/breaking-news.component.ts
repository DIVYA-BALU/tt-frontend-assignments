import { Component } from '@angular/core';
import { News } from 'src/app/model/News';
import { BreakingNewsService } from './breaking-news.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.scss'],
})
export class BreakingNewsComponent {
  newsContents!: News[];

  constructor(
    private breakingnewsService: BreakingNewsService,
    private sharedService: SharedServiceService
  ) {}

  ngOnInit() {
    this.showSpinner();
    this.getBreakingNews();
    this.sharedService.setBadge(false);
  }

  getBreakingNews() {
    this.breakingnewsService.getBreakingNews().subscribe((data) => {
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

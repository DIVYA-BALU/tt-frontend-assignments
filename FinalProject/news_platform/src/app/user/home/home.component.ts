import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ShortReads } from 'src/app/model/ShortReads';
import { Article } from 'src/app/model/Article';
import { Router } from '@angular/router';
import { News } from 'src/app/model/News';
import { DailyNewsService } from '../daily-news/daily-news.service';
import { CommonService } from '../display-category/common-service.service';
import { Explainers } from 'src/app/model/Explainers';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  newsVideos: string[] = [
    "https://www.youtube.com/embed/PJjnbPOSDDg?si=i5gYq1GO2WIhia1y",
    "https://www.youtube.com/embed/8WXH_Q6B4Ig?si=8FJGbeYFyIFEQ7NZ",
    "https://www.youtube.com/embed/MEU2ZF2iaAM?si=_p5oxy46u9CKS7EH",
    "https://www.youtube.com/embed/kBQSsFFSfJg?si=4BPH49Ob8Ta3Rn-r",
    "https://www.youtube.com/embed/deJU4BxQ8mE?si=-WiGIw1izx3GnXlW",
    "https://www.youtube.com/embed/UDBrwN2CAAE?si=b8XbsTSL7uMQt3po",
    "https://www.youtube.com/embed/-fMmOfHst3A?si=3G_1BgZfWGOZTA6m",
    "https://www.youtube.com/embed/MqeMxqGvMuQ?si=2FgDUZW6dsx57iK5",
    "https://www.youtube.com/embed/nhzO6EqWLqo?si=HUGIWMBSPoenO8Os",
    "https://www.youtube.com/embed/BgROEavwqak?si=hs30_N2OWihSfNLA",
    "https://www.youtube.com/embed/BgROEavwqak?si=vNU-SB_3izOf-Zlq"
  ];
  selectedUrl!: SafeUrl;
  shortReads: ShortReads[] = [];
  articles: Article[] = [];
  newsContents!: News[];
  topNews!: News[];
  allNews!: News[];
  sportsNews!: News[];
  entainmentNews!: News[];
  explainers!: Explainers[];
  subscriptions: Subscription[] = [];

  constructor(
    private homeService: HomeService,
    private route: Router,
    private dailynewsService: DailyNewsService,
    private commonService: CommonService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.randomVideoGenerator();
    this.getShortReads(0, 2);
    this.getArticle(0, 2);
    this.getDailyNews();
    this.getTopNews();
    this.getAllNews();
    this.getSportsNews();
    this.getEntainmentNews();
    this.getExplainers();
  }

  randomVideoGenerator() {
    this.selectedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.newsVideos[Math.floor(Math.random() * 12)]);
  }

  getShortReads(pageIndex: number, pageSize: number) {
    this.subscriptions.push(
      this.homeService.getShortReads(pageIndex, pageSize).subscribe((data) => {
        this.shortReads = data.content;
      })
    );
  }

  getArticle(pageIndex: number, pageSize: number) {
    this.subscriptions.push(
      this.homeService.getArticle(pageIndex, pageSize).subscribe((data) => {
        this.articles = data.content;
      })
    );
  }

  onClick() {
    this.route.navigate(['/user/form']);
  }

  getDailyNews() {
    this.subscriptions.push(
      this.dailynewsService.getDailyNews().subscribe((data) => {
        this.newsContents = data.slice(0, 10);
      })
    );
  }

  getTopNews() {
    this.subscriptions.push(
      this.homeService.getTopNews().subscribe((data) => {
        this.topNews = data.slice(0, 10);
      })
    );
  }

  getAllNews() {
    this.subscriptions.push(
      this.homeService.getAllNews().subscribe((data) => {
        this.allNews = data.slice(0, 12);
      })
    );
  }

  getSportsNews() {
    this.subscriptions.push(
      this.commonService.getCategoryNews('SPORTS').subscribe((data) => {
        this.sportsNews = data.slice(0, 5);
      })
    );
  }

  getEntainmentNews() {
    this.subscriptions.push(
      this.commonService.getCategoryNews('ENTERTAINMENT').subscribe((data) => {
        this.entainmentNews = data.slice(0, 5);
      })
    );
  }

  getExplainers() {
    this.subscriptions.push(
      this.homeService.getExplainer(0, 5).subscribe((data) => {
        this.explainers = data.content;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}

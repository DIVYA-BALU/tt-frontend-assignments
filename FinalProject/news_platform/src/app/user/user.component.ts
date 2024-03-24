import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import Swal from 'sweetalert2';
import { ProfileService } from '../profile/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnDestroy {
  logged!: boolean;
  showBadge!: boolean;
  subscribed!: boolean;
  name!: string;
  subscriptions: Subscription[] = [];

  constructor(
    private sharedService: SharedServiceService,
    private route: Router,
    private profileService: ProfileService
  ) {}

  inputText: string = '';
  @ViewChild('trading') content!: ElementRef;
  script!: any;

  @ViewChild('trading1') content1!: ElementRef;
  script1!: any;

  ngOnInit() {
    this.subscriptions.push(
      this.sharedService.loginStatusData.subscribe((data) => {
        this.logged = data;
      })
    );

    this.subscriptions.push(
      this.sharedService.subscribedValueData$.subscribe((data) => {
        this.subscribed = data;
      })
    );

    this.subscriptions.push(
      this.sharedService.badgeValueData$.subscribe((data) => {
        this.showBadge = data;
      })
    );

    this.getProfile();

    this.loadTradingViewWidget();
    this.loadTradingViewWidget1();
  }

  getProfile() {
    this.subscriptions.push(
      this.profileService.getProfile().subscribe((data) => {
        this.name = data.firstName;
      })
    );
  }

  ngAfterViewInit() {
    this.content.nativeElement.appendChild(this.script);
    this.content1.nativeElement.appendChild(this.script1);
  }

  logout() {
    localStorage.clear();
    this.sharedService.setLogout();
    Swal.fire({
      text: 'You are successfully logged out!',
      icon: 'success',
    });
    this.route.navigate(['/login']);
  }

  login() {
    this.route.navigate(['/login']);
  }

  subscribe() {
    this.route.navigate(['/subscription']);
  }

  signup() {
    this.route.navigate(['/signup']);
  }

  onSearch() {
    this.sharedService.setSearchValue(this.inputText);
    this.route.navigate(['user/search']);
  }

  OnClick() {
    this.route.navigate(['user/home']);
  }

  loadTradingViewWidget() {
    this.script = document.createElement('script');
    this.script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    this.script.async = true;
    this.script.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "en"
      }
    `;
  }

  loadTradingViewWidget1() {
    this.script1 = document.createElement('script');
    this.script1.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
    this.script1.async = true;
    this.script1.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "isTransparent": false,
        "showSymbolLogo": true,
        "colorTheme": "light",
        "locale": "en"
      }
    `;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}

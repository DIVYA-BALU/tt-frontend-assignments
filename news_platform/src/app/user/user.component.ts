import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  logged!: boolean;
  showBadge!: boolean;
  subscribed!: boolean;

  constructor(
    private sharedService: SharedServiceService,
    private route: Router,
    private userService: UserService
  ) {

    // this.getStocks();
  }

  inputText: string = '';
  @ViewChild('trading') content!: ElementRef;
  script!: any;

  @ViewChild('trading1') content1!: ElementRef;
  script1!: any;

  ngOnInit(){
    this.sharedService.loginStatusData.subscribe((data) => {
      this.logged = data;
      console.log(this.logged);
    });

    this.sharedService.subscribedValueData$.subscribe( (data) => {
      this.subscribed = data;
      console.log("sub", this.subscribed);
      
    })

    this.sharedService.badgeValueData$.subscribe((data) => {
      this.showBadge = data;
      console.log(this.showBadge);
    })

    this.loadTradingViewWidget();
    this.loadTradingViewWidget1();
  }

  ngAfterViewInit() {
    this.content.nativeElement.appendChild(this.script);
    this.content1.nativeElement.appendChild(this.script1);
  }

  logout() {
    this.route.navigate(['/login']);
    localStorage.clear();
    this.sharedService.setLogout();
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

  getStocks(){
    this.userService.getStocks().subscribe( (data) => {
      console.log(data);
    })
  }

  timer: any;

  onSearch(){

   clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.sharedService.setSearchValue(this.inputText);
    }, 1000);
    
    this.route.navigate(['user/search']);
  }

  OnClick(){
    this.route.navigate(['user/home']);
  }

  loadTradingViewWidget() {
    this.script = document.createElement('script');
    this.script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
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
    this.script1.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
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
}

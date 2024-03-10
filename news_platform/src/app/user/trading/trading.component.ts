import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss'],
})
export class TradingComponent {
  constructor() {}

  ngOnInit(): void {
    this.loadTradingViewWidget();
    this.loadTradingViewWidget1();
    this.loadTradingViewWidget2();
    this.loadTradingViewWidget3();
    this.loadTradingViewWidget4();
  }

  @ViewChild('trading') content!: ElementRef;
  script!: any;

  @ViewChild('trading1') content1!: ElementRef;
  script1!: any;

  @ViewChild('trading2') content2!: ElementRef;
  script2!: any;

  @ViewChild('trading3') content3!: ElementRef;
  script3!: any;

  @ViewChild('trading4') content4!: ElementRef;
  script4!: any;

  ngAfterViewInit() {
    this.content.nativeElement.appendChild(this.script);
    this.content1.nativeElement.appendChild(this.script1);
    this.content2.nativeElement.appendChild(this.script2);
    this.content3.nativeElement.appendChild(this.script3);
    this.content4.nativeElement.appendChild(this.script4);
  }

  loadTradingViewWidget() {
    this.script = document.createElement('script');
    this.script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    this.script.async = true;
    this.script.innerHTML = `
      {
        "symbol": "FX:EURUSD",
        "width": 350,
        "isTransparent": false,
        "colorTheme": "light",
        "locale": "en"
      }
    `;
  }

  loadTradingViewWidget1() {
    this.script1 = document.createElement('script');
    this.script1.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    this.script1.async = true;
    this.script1.innerHTML = `{
  "colorTheme": "light",
  "dateRange": "12M",
  "showChart": true,
  "locale": "en",
  "largeChartUrl": "",
  "isTransparent": false,
  "showSymbolLogo": true,
  "showFloatingTooltip": false,
  "width": "400",
  "height": "550",
  "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
  "plotLineColorFalling": "rgba(41, 98, 255, 1)",
  "gridLineColor": "rgba(240, 243, 250, 0)",
  "scaleFontColor": "rgba(106, 109, 120, 1)",
  "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
  "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
  "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
  "tabs": [
    {
      "title": "Indices",
      "symbols": [
        {
          "s": "FOREXCOM:SPXUSD",
          "d": "S&P 500 Index"
        },
        {
          "s": "FOREXCOM:NSXUSD",
          "d": "US 100 Cash CFD"
        },
        {
          "s": "FOREXCOM:DJI",
          "d": "Dow Jones Industrial Average Index"
        },
        {
          "s": "INDEX:NKY",
          "d": "Nikkei 225"
        },
        {
          "s": "INDEX:DEU40",
          "d": "DAX Index"
        },
        {
          "s": "FOREXCOM:UKXGBP",
          "d": "FTSE 100 Index"
        }
      ],
      "originalTitle": "Indices"
    },
    {
      "title": "Futures",
      "symbols": [
        {
          "s": "CME_MINI:ES1!",
          "d": "S&P 500"
        },
        {
          "s": "CME:6E1!",
          "d": "Euro"
        },
        {
          "s": "COMEX:GC1!",
          "d": "Gold"
        },
        {
          "s": "NYMEX:CL1!",
          "d": "WTI Crude Oil"
        },
        {
          "s": "NYMEX:NG1!",
          "d": "Gas"
        },
        {
          "s": "CBOT:ZC1!",
          "d": "Corn"
        }
      ],
      "originalTitle": "Futures"
    },
    {
      "title": "Bonds",
      "symbols": [
        {
          "s": "CBOT:ZB1!",
          "d": "T-Bond"
        },
        {
          "s": "CBOT:UB1!",
          "d": "Ultra T-Bond"
        },
        {
          "s": "EUREX:FGBL1!",
          "d": "Euro Bund"
        },
        {
          "s": "EUREX:FBTP1!",
          "d": "Euro BTP"
        },
        {
          "s": "EUREX:FGBM1!",
          "d": "Euro BOBL"
        }
      ],
      "originalTitle": "Bonds"
    },
    {
      "title": "Forex",
      "symbols": [
        {
          "s": "FX:EURUSD",
          "d": "EUR to USD"
        },
        {
          "s": "FX:GBPUSD",
          "d": "GBP to USD"
        },
        {
          "s": "FX:USDJPY",
          "d": "USD to JPY"
        },
        {
          "s": "FX:USDCHF",
          "d": "USD to CHF"
        },
        {
          "s": "FX:AUDUSD",
          "d": "AUD to USD"
        },
        {
          "s": "FX:USDCAD",
          "d": "USD to CAD"
        }
      ],
      "originalTitle": "Forex"
    }
  ]
}`;
  }

  loadTradingViewWidget2() {
    this.script2 = document.createElement('script');
    this.script2.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
    this.script2.async = true;
    this.script2.innerHTML = `{
  "width": 550,
  "height": 550,
  "symbolsGroups": [
    {
      "name": "Indices",
      "originalName": "Indices",
      "symbols": [
        {
          "name": "FOREXCOM:SPXUSD",
          "displayName": "S&P 500 Index"
        },
        {
          "name": "FOREXCOM:NSXUSD",
          "displayName": "US 100 Cash CFD"
        },
        {
          "name": "FOREXCOM:DJI",
          "displayName": "Dow Jones Industrial Average Index"
        },
        {
          "name": "INDEX:NKY",
          "displayName": "Nikkei 225"
        },
        {
          "name": "INDEX:DEU40",
          "displayName": "DAX Index"
        },
        {
          "name": "FOREXCOM:UKXGBP",
          "displayName": "FTSE 100 Index"
        }
      ]
    },
    {
      "name": "Futures",
      "originalName": "Futures",
      "symbols": [
        {
          "name": "CME_MINI:ES1!",
          "displayName": "S&P 500"
        },
        {
          "name": "CME:6E1!",
          "displayName": "Euro"
        },
        {
          "name": "COMEX:GC1!",
          "displayName": "Gold"
        },
        {
          "name": "NYMEX:CL1!",
          "displayName": "WTI Crude Oil"
        },
        {
          "name": "NYMEX:NG1!",
          "displayName": "Gas"
        },
        {
          "name": "CBOT:ZC1!",
          "displayName": "Corn"
        }
      ]
    },
    {
      "name": "Bonds",
      "originalName": "Bonds",
      "symbols": [
        {
          "name": "CBOT:ZB1!",
          "displayName": "T-Bond"
        },
        {
          "name": "CBOT:UB1!",
          "displayName": "Ultra T-Bond"
        },
        {
          "name": "EUREX:FGBL1!",
          "displayName": "Euro Bund"
        },
        {
          "name": "EUREX:FBTP1!",
          "displayName": "Euro BTP"
        },
        {
          "name": "EUREX:FGBM1!",
          "displayName": "Euro BOBL"
        }
      ]
    },
    {
      "name": "Forex",
      "originalName": "Forex",
      "symbols": [
        {
          "name": "FX:EURUSD",
          "displayName": "EUR to USD"
        },
        {
          "name": "FX:GBPUSD",
          "displayName": "GBP to USD"
        },
        {
          "name": "FX:USDJPY",
          "displayName": "USD to JPY"
        },
        {
          "name": "FX:USDCHF",
          "displayName": "USD to CHF"
        },
        {
          "name": "FX:AUDUSD",
          "displayName": "AUD to USD"
        },
        {
          "name": "FX:USDCAD",
          "displayName": "USD to CAD"
        }
      ]
    }
  ],
  "showSymbolLogo": true,
  "isTransparent": false,
  "colorTheme": "light",
  "locale": "en",
  "backgroundColor": "#ffffff"
}`
  }

  loadTradingViewWidget3() {
    this.script3 = document.createElement('script');
    this.script3.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
    this.script3.async = true;
    this.script3.innerHTML = `{
  "colorTheme": "light",
  "dateRange": "12M",
  "exchange": "US",
  "showChart": true,
  "locale": "en",
  "largeChartUrl": "",
  "isTransparent": false,
  "showSymbolLogo": false,
  "showFloatingTooltip": false,
  "width": "400",
  "height": "550",
  "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
  "plotLineColorFalling": "rgba(41, 98, 255, 1)",
  "gridLineColor": "rgba(240, 243, 250, 0)",
  "scaleFontColor": "rgba(106, 109, 120, 1)",
  "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
  "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
  "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
}`;
  }

  loadTradingViewWidget4() {
    this.script4 = document.createElement('script');
    this.script4.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    this.script4.async = true;
    this.script4.innerHTML = `
  {
  "width": 550,
  "height": 490,
  "defaultColumn": "overview",
  "screener_type": "crypto_mkt",
  "displayCurrency": "USD",
  "colorTheme": "light",
  "locale": "en"
}`;
  }
}

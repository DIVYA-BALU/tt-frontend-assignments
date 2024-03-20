import { Component, OnDestroy } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-bottom-sheet',
  templateUrl: './login-bottom-sheet.component.html',
  styleUrls: ['./login-bottom-sheet.component.scss'],
})
export class LoginBottomSheetComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<LoginBottomSheetComponent>,
    private router: Router
  ) {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        _bottomSheetRef.dismiss();
      }
    });
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

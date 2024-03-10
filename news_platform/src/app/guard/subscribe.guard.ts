import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SubscribeBottomSheetComponent } from '../user/subscribe-bottom-sheet/subscribe-bottom-sheet.component';

@Injectable({
  providedIn: 'root',
})
export class SubscribeGuard implements CanActivate {
  subscribed!: boolean;

  constructor(private sharedService: SharedServiceService, private _bottomSheet: MatBottomSheet) {}

  canActivate() {
    this.sharedService.subscribedValueData$.subscribe((data) => {
      if (data) {
        this.subscribed = true;
      } else {
        this.subscribed = false;
        this._bottomSheet.open(SubscribeBottomSheetComponent);
      }
    });
    return this.subscribed;
  }
}

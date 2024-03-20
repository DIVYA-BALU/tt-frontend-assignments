import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SubscribeDialogComponent } from '../user/subscribe-dialog/subscribe-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class SubscribeGuard implements CanActivate {
  subscribed!: boolean;

  constructor(
    private sharedService: SharedServiceService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  canActivate() {
    this.sharedService.subscribedValueData$.subscribe((data) => {
      if (data) {
        this.subscribed = true;
      } else {
        this.subscribed = false;
        this.dialog.open(SubscribeDialogComponent, {
          enterAnimationDuration: '1000ms',
          exitAnimationDuration: '1000ms',
        });
        this.route.navigate(['/user/home']);
      }
    });
    return this.subscribed;
  }
}

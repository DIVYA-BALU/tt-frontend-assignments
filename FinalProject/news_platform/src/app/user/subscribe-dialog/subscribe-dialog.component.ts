import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subscribe-dialog',
  templateUrl: './subscribe-dialog.component.html',
  styleUrls: ['./subscribe-dialog.component.scss'],
})
export class SubscribeDialogComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  constructor(
    private route: Router,
    private dialogRef: MatDialogRef<SubscribeDialogComponent>
  ) {
    this.subscription = route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        dialogRef.close();
      }
    });
  }

  onClick() {
    this.route.navigate(['/subscription']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

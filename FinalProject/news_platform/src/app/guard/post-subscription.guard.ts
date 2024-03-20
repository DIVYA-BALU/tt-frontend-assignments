import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedServiceService } from '../shared-service/shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostSubscriptionGuard implements CanActivate {
  isSubscribed!: boolean;
  constructor(private sharedService: SharedServiceService, private route: Router){}

  canActivate(): boolean {
    this.sharedService.subscribedValueData$.subscribe((data) => {
      if (data) {
        this.route.navigate(['/user/mySubscription']);
        this.isSubscribed = false;
      } else {
        this.isSubscribed = true;
      }
    })
    return this.isSubscribed;
  }
  
}

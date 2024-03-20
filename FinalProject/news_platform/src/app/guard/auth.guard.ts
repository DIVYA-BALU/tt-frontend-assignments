import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LoginBottomSheetComponent } from '../user/login-bottom-sheet/login-bottom-sheet.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sharedService: SharedServiceService, private _bottomSheet: MatBottomSheet, private route: Router){}

  canActivate(): boolean{
    this.sharedService.loginStatusData.subscribe((data) => {
      if (!data) {
        this._bottomSheet.open(LoginBottomSheetComponent);
      }
    })
    return true;
  }
  
}

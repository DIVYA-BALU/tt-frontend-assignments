import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LoginBottomSheetComponent } from '../user/login-bottom-sheet/login-bottom-sheet.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  logged!: boolean ;

  constructor(private sharedService: SharedServiceService, private _bottomSheet: MatBottomSheet){}

  canActivate(): boolean{
    this.sharedService.loginStatusData.subscribe((data) => {
      if (data) {
        this.logged = true;
      }else{
        this.logged = false;
        this._bottomSheet.open(LoginBottomSheetComponent);
      }
    })
    return this.logged;
  }
  
}

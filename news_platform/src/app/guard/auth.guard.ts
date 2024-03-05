import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedServiceService } from '../shared-service/shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sharedService: SharedServiceService, private route: Router){}

  canActivate(): boolean{
    this.sharedService.loginStatusData.subscribe((data) => {
      if (data) {
        return true;
      }else{
        this.route.navigate(["/login"])
        return false;
      }
    })
    return false;
  }
  
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedServiceService } from '../shared-service/shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostLoginGuard implements CanActivate {

  isLogged!: boolean;
  constructor(private sharedService: SharedServiceService, private route: Router){}

  canActivate(): boolean {
    this.sharedService.loginStatusData.subscribe((data) => {
      if (data) {
        this.route.navigate(['/user/home']);
        this.isLogged = false;
      } else {
        this.isLogged = true;
      }
    })
    return this.isLogged;
  }
  
}

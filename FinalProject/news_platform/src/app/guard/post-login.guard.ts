import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedServiceService } from '../shared-service/shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostLoginGuard implements CanActivate {

  isLogged!: boolean;
  isEmployee!: boolean;
  constructor(private sharedService: SharedServiceService, private route: Router){}

  canActivate(): boolean {

    if (localStorage.getItem("Role") === 'USER') {
      this.isEmployee = false;
    } else {
      this.isEmployee = true;
    }

    this.sharedService.loginStatusData.subscribe((data) => {
      if (data && !this.isEmployee) {
        this.route.navigate(['/user/home']);
        this.isLogged = false;
      } else if (data && this.isEmployee) {
        this.isLogged = false;
      } else {
        this.isLogged = true;
      }
    })
    return this.isLogged;
  }
  
}

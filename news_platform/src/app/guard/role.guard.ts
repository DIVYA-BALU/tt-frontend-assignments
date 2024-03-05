import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private route: Router){}

  canActivate(){
    if (localStorage.getItem("Role") === 'USER') {
      this.route.navigate(['/**'])
      return false;
    }
      return true;
  }
  
}

import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginServive: LoginService, private route : Router) {}
  canActivate(): boolean {
    if(this.loginServive.isAuthenticated()){
      if(this.loginServive.role == 'ROLE_ADMIN'){
        return true;
      }
      this.route.navigate(['/home']);
      return false;
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }
  
}

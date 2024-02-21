import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./services/login.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{

    constructor(private loginService: LoginService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.loginService.isAuthenticated()){
            return true;
        }
        else{
            this.router.navigate(['login']);
            return false;
        }

        // if(localStorage.getItem('logged_in') === 'true'){
        //     // this.router.navigate(['dashboard']); //cannot navigate to lazy load
        //     return true;
        // }
        // else{
        //     this.router.navigate(['login']);
        //     return false;
        // }
    }
}
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { LoginService } from "./service/login.service";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{
    constructor(private loginService:LoginService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot ):boolean{
        console.log(this.router.url);
        
        if(this.loginService.isAuthenticated()){
            console.log(this.router.url);
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }
}
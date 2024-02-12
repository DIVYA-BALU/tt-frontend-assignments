import { Injectable } from "@angular/core";
import { Router , RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import { LoginService } from "./login/login.service";



@Injectable({
    providedIn : 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private loginService: LoginService, private router: Router){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        if(this.loginService.isAuthenticated()){
            return true;
        }
        else{
            return false;
        }
    }
}

import { Injectable } from "@angular/core";
import { Router , RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import { LoginService } from "./login/login.service";
import { CommonServiceService } from "./permissions/common-service.service";



@Injectable({
    providedIn : 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private loginService: LoginService, private router: Router, private commonService : CommonServiceService){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        if(this.loginService.isAuthenticated()){
            this.commonService.getPermissions();
            return true;
        }
        else{
            return false;
        }

    }
}

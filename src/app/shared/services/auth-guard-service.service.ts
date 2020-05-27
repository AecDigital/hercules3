import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { AuthenticationService } from './authentication.service';

 
 
@Injectable()
export class AuthGuardService implements CanActivate {
  user: User;
 
    constructor(private router:Router, private authentication: AuthenticationService ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition 
        this.user = JSON.parse(sessionStorage.getItem("session"));  
        if (this.user === null)  {
            this.router.navigate(['/login']);
            //redirect to login/home page etc
            //return false to cancel the navigation
            return false;
        } 
        return true;
    }
 
}
 

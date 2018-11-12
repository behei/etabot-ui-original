import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('username')) {
            // either signed up or logged in so return true
            console.log("the auth guard is true");
            return true;
        }
        else 
        // not logged in so redirect to login page with the return url
        {
            console.log("the auth guard is false");
            this.router.navigate(['/']);
            return false;
        }
    }
}
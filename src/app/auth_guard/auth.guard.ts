import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // either signed up or logged in so return true
            console.log('the auth guard is true');
            return true;
        } else {
            console.log('the auth guard is false');
            this.router.navigate(['/']);
            return false;
        }
    }
}

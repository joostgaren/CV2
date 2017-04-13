import { CanLoad, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) { 

        console.log("AuthGard Constructor");
    }
    
    canLoad() {
                console.log("canLoad t" + this.authService.isLoggedIn);
                if (this.authService.isLoggedIn) {
                    return true;
                } 
                else {
                    this.router.navigateByUrl('auth/login');
                    return false;
                }
    }

    canActivate() {
        console.log("canActivate");
        return true;
    }

}
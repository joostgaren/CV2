import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

    isLoggedIn = false;

    constructor() {
        console.log("AuthenticationService construction");
    }

    initialize(): void {
        console.log("AuthenticationService initialize");
        this.isLoggedIn = true;
    }

}
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'authentication',
    templateUrl: 'authentication.component.html'
})
export class AuthenticationComponent implements OnInit {
    constructor() { console.log("Const"); }

    ngOnInit() {
        console.log("on Init Auth");
     }
}

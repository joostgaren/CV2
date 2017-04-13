import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.css']
})
export class LoginContainer implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit Container");
  }

}

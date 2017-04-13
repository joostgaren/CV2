import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _authRunning;
  public _authFailed;

  @Input() set authenticationRunning(running: boolean) {
    this._authRunning = running;
  }

  @Input() set authenticationFailed(failed: boolean) {
    this._authFailed = failed;
//    this._authFailed && this.showErrorMessageToast();
  }

  @Output() loginRequested = new EventEmitter();

 public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
    rememberMe: [""]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  doLogin()  {

  }

}

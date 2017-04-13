import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication.routing';
import { MaterialModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { LoginContainer } from './containers/login/login.container';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,    
    AuthenticationRoutingModule
  ],
  declarations: [
    LoginContainer,
    LoginComponent,
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }

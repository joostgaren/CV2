import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../../environments/environment';
import { AngularFireModule, AngularFire } from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { AuthenticationModule } from '../authentication/authentication.module';
//import { HomeModule } from '../home/home.module';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, environment.firebaseAuthConfig),
    FlexLayoutModule,
//    AuthenticationModule,
//    HomeModule
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthenticationService,
        AuthGuard
      ]
    };
  }

}

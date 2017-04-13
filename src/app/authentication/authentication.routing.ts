import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

import { AuthenticationComponent } from './authentication.component';
import { LoginContainer } from './containers/login/login.container';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: AuthenticationComponent, data: { title: 'Login' },
            children: [
                {
                    path: 'login',
                    component: LoginContainer,
                },
                {
                    path: '',
                    redirectTo: 'login',
                    pathMatch: 'full'
                },                
            ]
        }
    ])],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

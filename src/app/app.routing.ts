import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: 'auth',
            loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
        },
        {
            path: 'home',
            canLoad: [AuthGuard],
            loadChildren: 'app/home/home.module#HomeModule'
        },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ],
        { preloadingStrategy: PreloadAllModules }
    )],
    exports: [RouterModule]
})

export class AppRoutingModule { }

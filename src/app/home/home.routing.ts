import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

import { HomeComponent } from './components/home.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            children: [
                {
                    path: '',
                    component: HomeComponent,
                    canActivate: [AuthGuard]
                }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

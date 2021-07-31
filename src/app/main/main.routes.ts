import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

export const MainRoute: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', redirectTo: 'home/index', pathMatch: 'full' },
            { path: 'home/index', component: HomeComponent },
            { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
        ]

    }

];
export const MainRoute2: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', redirectTo: 'home/index', pathMatch: 'full' },
    { path: 'home/index', component: HomeComponent },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
]
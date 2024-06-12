import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page/home-page.component';

export const routes: Routes = [
{
    path: 'auth',
    loadChildren: () => import('./features/auth/auth-page/auth.routes').then( m => m.routes )
},
{
    path: 'home',
    component: HomePageComponent,
    loadChildren: () => import('./features/home/home-page/home.routes').then( m => m.routes )
}
];

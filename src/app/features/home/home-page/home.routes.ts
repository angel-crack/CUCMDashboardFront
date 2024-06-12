import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

export const routes: Routes = [
{
    path: '',
    loadChildren: () => import('../main/main.routes').then( m => m.routes )
}
];

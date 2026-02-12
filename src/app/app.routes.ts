import { Routes } from '@angular/router';
import { Yes } from './pages/yes/yes';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'yes' , component: Yes }
];

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Stories } from './pages/stories/stories';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'stories', component: Stories },
];

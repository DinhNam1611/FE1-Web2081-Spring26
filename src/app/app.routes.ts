import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Stories } from './pages/stories/stories';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { AddStory } from './pages/add-story/add-story';
import { AddProduct } from './pages/add-product/add-product';
import { Register } from './pages/auth/register/register';
import { EditStory } from './pages/edit-story/edit-story';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'product', component: Products },
  { path: 'add-story', component: AddStory },
  { path: 'edit-story/:id', component: EditStory },
  { path: 'add-product', component: AddProduct },
  { path: 'register', component: Register },
  { path: 'stories', component: Stories },
];

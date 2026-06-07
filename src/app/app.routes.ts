import { Routes } from '@angular/router';
import { Home } from './app/pages/home/home/home';
import { Services } from './app/pages/services/services/services';
import { About } from './app/pages/about/about/about';
import { Contact } from './app/pages/contact/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'الرئيسية - نادي الصقر الإفريقي للسيارات' },
  { path: 'services', component: Services, title: 'خدماتنا - نادي الصقر الإفريقي للسيارات' },
  { path: 'about', component: About, title: 'عن النادي - نادي الصقر الإفريقي للسيارات' },
  { path: 'contact', component: Contact, title: 'تواصل معنا - نادي الصقر الإفريقي للسيارات' },
  { path: '**', redirectTo: '' },
];

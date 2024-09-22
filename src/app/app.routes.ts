import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdocaoComponent } from './components/adocao/adocao.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'pet',
    component: AdocaoComponent,
    title: 'Pets',
  },
];

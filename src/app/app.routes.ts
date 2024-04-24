import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'jokes', component: JokeListComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' }
];

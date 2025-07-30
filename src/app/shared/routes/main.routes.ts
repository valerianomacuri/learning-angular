import { Routes } from '@angular/router';
import { LayoutComponent } from '../components';
import { FeatureShowcaseListComponent } from '../components/feature-showcase-list/feature-showcase-list.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'fundamentals',
        pathMatch: 'full',
      },
      {
        path: ':topic',
        component: FeatureShowcaseListComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'fundamentals' },
];

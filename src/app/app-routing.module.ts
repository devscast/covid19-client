import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'countries',
    loadChildren: () => import('./pages/countries/countries.module').then(m => m.CountriesModule),
  },
  {
    path: 'signaler',
    loadChildren: () => import('./pages/alerts/alerts.module').then(m => m.AlertsModule),
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/infos/infos.module').then(m => m.InfosModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule),
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then(m => m.FAQModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

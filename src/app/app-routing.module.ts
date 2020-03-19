import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CountriesComponent} from './pages/countries/countries.component';
import {CountryComponent} from './pages/countries/country/country.component';
import {ImageComponent} from './pages/image/image.component';
import {MapComponent} from './pages/map/map.component';
import {SourcesComponent} from './pages/sources/sources.component';
import {InfosComponent} from './pages/infos/infos.component';
import {AlertsComponent} from './pages/alerts/alerts.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'countries', component: CountriesComponent, pathMatch: 'full'},
  {path: 'countries/:id', component: CountryComponent, pathMatch: 'full'},
  {path: 'signaler', component: AlertsComponent, pathMatch: 'full'},
  {path: 'notifications', component: InfosComponent, pathMatch: 'full'},
  {path: 'sources', component: SourcesComponent, pathMatch: 'full'},
  {path: 'image', component: ImageComponent, pathMatch: 'full'},
  {path: 'map', component: MapComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CountriesComponent} from './pages/countries/countries.component';
import {CountryComponent} from './pages/countries/country/country.component';
import {ImageComponent} from './pages/image/image.component';
import {MapComponent} from './pages/map/map.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'countries', component: CountriesComponent, pathMatch: 'full'},
  {path: 'countries/:id', component: CountryComponent, pathMatch: 'full'},
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

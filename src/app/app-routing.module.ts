import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountryComponent } from './pages/countries/country/country.component';
import { ImageComponent } from './pages/image/image.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:id', component: CountryComponent },
  { path: 'image', component: ImageComponent },
  { path: '*', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

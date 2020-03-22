import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CountriesComponent} from './countries.component';
import {CountryComponent} from './country/country.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent,
  },
  {
    path: ':id',
    component: CountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { FilterPipe } from './filter.pipe';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries.component';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    FilterPipe,
    CountryComponent,
    CountriesComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ComponentsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CountriesModule {
}

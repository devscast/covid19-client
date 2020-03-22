import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountriesRoutingModule} from './countries-routing.module';
import {FilterPipe} from "./filter.pipe";

@NgModule({
  declarations: [
    FilterPipe,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
  ]
})
export class CountriesModule {
}

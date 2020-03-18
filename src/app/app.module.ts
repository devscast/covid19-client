import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CountriesComponent} from './pages/countries/countries.component';
import {ImageComponent} from './pages/image/image.component';
import {CountryComponent} from './pages/countries/country/country.component';
import {LoaderComponent} from './components/loader/loader.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FilterPipe} from './pages/countries/filter.pipe';
import {FormsModule} from '@angular/forms';
import {MapComponent} from './pages/map/map.component';
import {ErrorComponent} from './components/error/error.component';
import {ApiInterceptor} from './api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    CountriesComponent,
    ImageComponent,
    CountryComponent,
    LoaderComponent,
    FilterPipe,
    MapComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

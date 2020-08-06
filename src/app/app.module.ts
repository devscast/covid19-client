import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from './components/components.module';
import {HeadersInterceptor} from './interceptors/headers.interceptor';


// loader module
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true},
    TranslateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

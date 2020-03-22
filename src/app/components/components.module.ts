import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {HeaderComponent} from "./header/header.component";
import {LoaderComponent} from "./loader/loader.component";
import {ErrorComponent} from "./error/error.component";

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    LoaderComponent,
    ErrorComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    LoaderComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import {LoaderComponent} from './loader/loader.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    ErrorComponent,
    LoaderComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    ErrorComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ComponentsModule {
}

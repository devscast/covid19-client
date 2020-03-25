import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from './error/error.component';
import {LoaderComponent} from './loader/loader.component';
import {TranslateModule} from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';


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
    TranslateModule,
    FormsModule,
  ]
})
export class ComponentsModule {
}

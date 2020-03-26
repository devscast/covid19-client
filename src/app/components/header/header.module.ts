import { NgModule } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    TranslateModule,
  ]
})

export class HeaderModule {
}

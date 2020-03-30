import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FAQRoutingModule} from './faq-routing.module';
import {FAQComponent} from './faq.component';
import {ComponentsModule} from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [FAQComponent],
  imports: [
    CommonModule,
    FAQRoutingModule,
    ComponentsModule,
    TranslateModule,
  ]
})
export class FAQModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfosRoutingModule} from './infos-routing.module';
import {InfosComponent} from './infos.component';
import {FormsModule} from '@angular/forms';
import {ComponentsModule} from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [InfosComponent],
  imports: [
    CommonModule,
    InfosRoutingModule,
    FormsModule,
    ComponentsModule,
    TranslateModule,
  ]
})
export class InfosModule {
}

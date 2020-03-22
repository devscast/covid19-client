import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfosRoutingModule} from './infos-routing.module';
import {InfosComponent} from './infos.component';
import {FormsModule} from '@angular/forms';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [InfosComponent],
  imports: [
    CommonModule,
    InfosRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class InfosModule {
}

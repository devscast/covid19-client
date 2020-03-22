import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapRoutingModule} from './map-routing.module';
import {MapComponent} from './map.component';
import {SuspectsComponent} from './suspects/suspects.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    MapComponent,
    SuspectsComponent,
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    ComponentsModule
  ]
})
export class MapModule {
}

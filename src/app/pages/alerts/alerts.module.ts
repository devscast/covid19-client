import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertsRoutingModule} from './alerts-routing.module';
import {AlertsComponent} from './alerts.component';
import {FormsModule} from '@angular/forms';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    AlertsRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class AlertsModule {
}

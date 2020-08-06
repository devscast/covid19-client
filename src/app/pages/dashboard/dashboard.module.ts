import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {ComponentsModule} from '../../components/components.module';
import {AnimatedDigitComponent} from '../../components/animated/animated-digit.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AnimatedDigitComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    TranslateModule,
  ]
})
export class DashboardModule {
}

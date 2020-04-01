import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {ComponentsModule} from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { AnimatedDigitComponent } from '../../../animated/animated-digit.component';


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

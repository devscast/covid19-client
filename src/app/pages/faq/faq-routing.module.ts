import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FAQComponent} from './faq.component';

const routes: Routes = [{
  path: '',
  component: FAQComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FAQRoutingModule {
}

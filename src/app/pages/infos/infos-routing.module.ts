import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfosComponent} from "./infos.component";

const routes: Routes = [{
  path: '',
  component: InfosComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfosRoutingModule {
}

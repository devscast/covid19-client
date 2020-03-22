import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MapComponent} from "./map.component";
import {SuspectsComponent} from "./suspects/suspects.component";

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
    pathMatch: 'full'
  },
  {
    path: 'suspects',
    component: SuspectsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'covid19';


  routes = [
    'dashboard',
    'countries',
    'image'
  ]
}

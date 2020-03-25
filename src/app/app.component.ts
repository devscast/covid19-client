import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['fr', 'li', 'sw']);
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }
}

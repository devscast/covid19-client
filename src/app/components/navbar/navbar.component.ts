import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})

export class NavbarComponent implements OnInit {
  open = false;
  language = { name: 'Français', locale: 'fr' };
  languages = [
    { name: 'Français', locale: 'fr' },
    { name: 'Lingala', locale: 'li' },
    { name: 'Swahili', locale: 'sw' },
  ];

  onChangeLanguage = () => {
    this.translate.use(this.language.locale);
  }

  constructor(public translate: TranslateService) {
    this.translate.use(this.translate.currentLang);
    this.language = this.languages.find(item => item.locale === translate.currentLang);
  }

  ngOnInit(): void {
  }
}

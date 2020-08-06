import {Component, OnDestroy, OnInit} from '@angular/core';
import sweetAlert from 'sweetalert2';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {BackendService} from '../../services/backend.service';


@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styles: []
})
export class InfosComponent implements OnInit, OnDestroy {
  lang: string;
  number: string;
  loading: boolean;
  error: boolean;

  constructor(
    private backendService: BackendService,
    private router: Router,
    public translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.backendService.addContact({number: this.number, lang: this.lang})
      .subscribe(
        () => {
          this.loading = false;
          sweetAlert.fire('Succès', 'Vous Recevrez désormais les mises à jour par SMS', 'success');
          this.router.navigate(['/dashboard']);
        },
        e => {
          if (e.status === 400) {
            this.loading = false;
            sweetAlert.fire('Erreur', e.error.detail, 'warning');
          } else {
            sweetAlert.fire(
              'Oups',
              'Impossible de contacter le Serveur, Vérifiez votre connexion internet',
              'warning'
            );
            this.loading = false;
          }
        },
      );
  }

  ngOnDestroy(): void {
  }
}

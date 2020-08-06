import {Component, OnDestroy, OnInit} from '@angular/core';
import sweetAlert from 'sweetalert2';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {BackendService} from '../../services/backend.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styles: []
})
export class AlertsComponent implements OnInit, OnDestroy {
  error: boolean;
  number: string;
  symptoms: string;
  infos: string;
  lat: number;
  lng: number;
  age: number;
  sex: string;
  wellKnownCenter: string;
  infectedRelatives: string;
  gesturesBarriersLevel: string;

  private subscription = new Subscription();

  constructor(
    private backendService: BackendService,
    private router: Router,
    public translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      },
      e => sweetAlert.fire('Error', 'Impossible de vous géolocaliser, Réessayez plus tard', 'warning')
    );
  }

  onSubmit() {
    const request = () => {
      this.backendService.addAlert({
        age: this.age,
        sex: this.sex,
        infos: this.infos,
        number: this.number,
        lat: this.lat.toString(),
        lng: this.lng.toString(),
        symptoms: this.symptoms.toString(),
        wellKnownCenter: Boolean(parseInt(this.wellKnownCenter, 10)),
        infectedRelatives: Boolean(parseInt(this.infectedRelatives, 10)),
        gesturesBarriersLevel: parseInt(this.gesturesBarriersLevel, 10)
      })
        .subscribe(
          () => {
            sweetAlert.fire('Succès', 'Nous avons reçu votre signalement', 'success');
            this.router.navigate(['/dashboard']);
          },
          e => {
            if (e.status === 400) {
              sweetAlert.fire('Erreur', e.error.detail, 'warning');
            } else {
              sweetAlert.fire(
                'Oups',
                'Impossible de contacter le Serveur, Vérifiez votre connexion internet',
                'warning'
              );
            }
          },
        );
    };
    this.subscription.add(request());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

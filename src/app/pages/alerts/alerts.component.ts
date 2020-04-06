import {Component, OnInit} from '@angular/core';
import sweetAlert from 'sweetalert2';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styles: []
})
export class AlertsComponent implements OnInit {
  loading: boolean;
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

  constructor(
    private apiService: ApiService,
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
    this.loading = true;
    this.apiService.addAlert({
      age: this.age,
      sex: this.sex,
      infos: this.infos,
      number: this.number,
      lat: this.lat.toString(),
      lng: this.lng.toString(),
      symptoms: this.symptoms.toString(),
      wellKnownCenter: Boolean(parseInt(this.wellKnownCenter)),
      infectedRelatives: Boolean(parseInt(this.infectedRelatives)),
      gesturesBarriersLevel: parseInt(this.gesturesBarriersLevel)
    })
      .subscribe(
        () => {
          this.loading = false;
          sweetAlert.fire('Succès', 'Nous avons reçu votre signalement', 'success');
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

}

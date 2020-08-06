import {Component, OnDestroy, OnInit} from '@angular/core';
import sweetAlert from 'sweetalert2';
import L from 'leaflet';

import {BackendService} from '../../../services/backend.service';
import {Alert} from '../../../models/backend.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-suspects',
  templateUrl: './suspects.component.html',
  styles: []
})
export class SuspectsComponent implements OnInit, OnDestroy {
  loading: boolean;
  error: boolean;
  lat: number;
  lng: number;
  data: Alert[];
  private subscription = new Subscription();

  constructor(private backendService: BackendService) {
  }

  load() {
    this.loading = true;
    this.backendService.getAlerts()
      .subscribe(
        data => {
          this.data = data;
          this.loading = false;

          const map = L.map('map');
          navigator.geolocation.getCurrentPosition(
            position => {
              this.lat = position.coords.latitude;
              this.lng = position.coords.longitude;

              map.setView([this.lat, this.lng], 6);
              const marker = L.marker([this.lat, this.lng]).addTo(map);
              marker.bindPopup('Moi.');

              this.data.forEach(alert => {
                L.circle([alert.lat, alert.lng], {
                  color: 'red',
                  fillColor: '#f03',
                  fillOpacity: 0.3,
                  radius: 300
                })
                  .bindPopup(`
                    <b>Statut: ${alert.status}</b><br>
                    <b>Symptômes</b>: ${alert.symptoms}<br><br>
                    <b>Infos</b>: ${alert.infos}<br>
                  `)
                  .addTo(map);
              });
            },
            e => {
              sweetAlert.fire('Error', 'Impossible de vous géolocaliser, Réessayez plus tard', 'warning');
              this.error = true;
            },
            {
              enableHighAccuracy: true
            }
          );
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
        },
        e => {
          sweetAlert.fire(
            'Oups',
            'Impossible de contacter le Serveur, Vérifiez votre connexion internet',
            'warning'
          );
          this.loading = false;
          this.error = true;
        }
      );
  }

  ngOnInit(): void {
    this.subscription.add(this.load());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

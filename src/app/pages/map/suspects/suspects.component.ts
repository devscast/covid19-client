import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../../api.service';
import {Alert} from '../../../api.model';
import sweetAlert from 'sweetalert2';
import L from 'leaflet';

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
  timer: any;

  constructor(private apiService: ApiService) {
  }

  load() {
    this.loading = true;
    this.apiService.getAlerts()
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
    this.load();
    setInterval(this.load, 30000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

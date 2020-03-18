import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../../api.service';
import {Case, Country} from '../../../api.model';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: []
})
export class CountryComponent implements OnInit, OnDestroy {
  params: Params;
  loading: boolean;
  error = false;
  name: string;
  data: Case;
  timer: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe(p => {
      this.params = p;
      if (typeof history.state.data.country !== 'undefined') {
        this.data = history.state.data.country;
      }
    });
  }

  get updatedAt() {
    return (new Date(this.data.lastUpdate)).toLocaleString('fr-FR');
  }

  load() {
    this.loading = true;
    this.apiService.getConfirmed()
      .subscribe(
        data => {
          const country = data.find(d => d.iso2 === this.params.id);
          if (typeof country !== 'undefined') {
            this.data = country;
            this.loading = false;
          } else {
            this.error = true;
          }
        },
        e => {
          sweetAlert.fire(
            'Désolé',
            'Données temporairement Indisponible, Veuillez consulter la Carte En Attendant',
            'warning'
          );
          this.loading = false;
          this.error = true;
        }
      );
  }

  ngOnInit(): void {
    this.load();
    this.timer = setInterval(this.load, 300000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

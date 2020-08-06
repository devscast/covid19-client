import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import sweetAlert from 'sweetalert2';

import {Covid19Service} from '../../../services/covid19.service';
import {Case} from '../../../models/covid19.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: []
})
export class CountryComponent implements OnInit, OnDestroy {
  params: Params;
  error = false;
  name: string;
  data: Case;
  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private covid19Service: Covid19Service) {
    this.route.params.subscribe(p => {
      this.params = p;
      if (history.state.data && typeof history.state.data.country !== 'undefined') {
        this.data = history.state.data.country;
      }
    });
  }

  get updatedAt() {
    return (new Date(this.data.lastUpdate)).toLocaleString('fr-FR');
  }

  load() {
    this.covid19Service.getConfirmed()
      .subscribe(
        data => {
          const country = data.find(d => {
            return encodeURI(`${d.countryRegion}--${d.long}--${d.lat}`).toLowerCase() === this.params.id
              || d.iso2 === this.params.id;
          });
          if (country) {
            this.data = country;
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

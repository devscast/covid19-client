import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../../api.service';
import {Country} from '../../../api.model';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: []
})
export class CountryComponent implements OnInit, OnDestroy {
  params: Params;
  loading: boolean;
  name: string;
  data: Country;
  timer: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe(p => {
      this.params = p;
      this.name = (typeof history.state.data !== 'undefined')
        ? history.state.data.name
        : this.getCountryName(p.id);
    });
  }

  getCountryName(id: string) {
    if (localStorage.getItem('countries')) {
      const country = JSON
        .parse(localStorage.getItem('countries'))
        .find(c => c.id === id);
      return (typeof country !== 'undefined') ? country.name : '';
    }
    return '';
  }

  get updatedAt() {
    return (new Date(this.data.lastUpdate)).toLocaleString('fr-FR');
  }

  load() {
    this.loading = true;
    this.apiService.getCountry(this.params.id)
      .subscribe(
        data => {
          this.data = data;
          this.loading = false;
        },
        e => {
          sweetAlert.fire('Error', e.message, 'error');
          this.loading = false;
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

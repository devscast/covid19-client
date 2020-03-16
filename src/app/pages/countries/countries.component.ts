import {Component, OnInit} from '@angular/core';
import {CountriesList} from 'src/app/api.model';
import {ApiService} from 'src/app/api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {

  loading: boolean;
  searchText: string;
  data: CountriesList[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    if (!localStorage.getItem('countries')) {
      this.loading = true;
      this.apiService.getCountries()
        .subscribe(data => {
          this.data = Object
            .keys(data.countries)
            .map(c => ({name: c, id: data.countries[c]}));
          localStorage.setItem('countries', JSON.stringify(this.data));
          this.loading = false;
        });
    } else {
      this.data = JSON.parse(localStorage.getItem('countries'));
    }
  }

  onChange(event) {
    this.data = this.data.filter(d => {
      const search = event.target.value.toLowerCase();
      return d.name.toLowerCase().includes(search) === true;
    });
  }

}

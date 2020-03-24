import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/api.model';
import { ApiService } from 'src/app/api.service';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {
  loading: boolean;
  error = false;
  searchText: string;
  sortBy: string = '';
  data: Case[];
  currentPage: number = 1;
  filteredData: Case[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getConfirmed()
      .subscribe(
        data => {
          data.map(d => {
            d.url = encodeURI(`${d.countryRegion}--${d.long}--${d.lat}`).toLowerCase();
          });
          this.data = data;
          this.filteredData = data;
          this.loading = false;
        }, e => {
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

  pageChanged(pageId) {
    this.currentPage = pageId;
  }
}

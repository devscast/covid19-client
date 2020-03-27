import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/api.model';
import { ApiService } from 'src/app/api.service';
import sweetAlert from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {
  loading: boolean;
  error = false;
  searchText: string;
  sortBy = '';
  data: Case[];
  currentPage: number = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getConfirmed()
      .subscribe(
        data => {
          data.map(d => {
            d.url = encodeURI(`${d.countryRegion}--${d.long}--${d.lat}`).toLowerCase();
          });

          const combinedData = data.reduce((acc, item) => {
            /*
              To handle countries without other information such as iso2, iso3
              Example of country: DRC, Ivory Coast, etc
            */
            const iso2 = item.iso2 || item.combinedKey;

            if (!acc[iso2]) {
              acc[iso2] = [];
            }

            acc[iso2].push(item);

            return acc;
          }, {});

          const countries = [];

          Object.keys(combinedData).forEach(index => {
            const items = combinedData[index];
            const country = items.reduce((acc: Case, item: Case) => {
              return {
                ...acc,
                confirmed: acc.confirmed + item.confirmed,
                recovered: acc.recovered + item.recovered,
                active: acc.active + item.active,
                deaths: acc.deaths + item.deaths,
              };
            });
            if (country) {
              countries.push(country);
            }
          });

          this.data = countries;
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
    this.getPageQueryParam();
  }

  getPageQueryParam() {
    const page = this.activatedRoute.snapshot.queryParams.page;
    page ? this.currentPage = page : this.currentPage = 1;
  }

  pageChanged(pageId) {
    this.currentPage = pageId;
    this.changePageQueryParam();
  }

  changePageQueryParam() {
    this.router.navigate([], {
      queryParams: {
        page: this.currentPage
      },
      queryParamsHandling: 'merge',
    });
  }
}

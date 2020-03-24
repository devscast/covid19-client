import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/api.model';
import { ApiService } from 'src/app/api.service';
import sweetAlert from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

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
  filteredData: Case[];

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
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

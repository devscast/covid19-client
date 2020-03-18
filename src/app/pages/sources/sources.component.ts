import {Component, OnInit} from '@angular/core';
import {ArticleSource} from '../../api.model';
import {ApiService} from '../../api.service';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styles: []
})
export class SourcesComponent implements OnInit {
  loading: boolean;
  error = false;
  data: ArticleSource[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sources')) {
      this.loading = true;
      this.apiService.getSources()
        .subscribe(
          data => {
            this.data = data;
            sessionStorage.setItem('sources', JSON.stringify(this.data));
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
    } else {
      this.data = JSON.parse(sessionStorage.getItem('sources'));
    }
  }
}


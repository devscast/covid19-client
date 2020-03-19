import {Component, OnDestroy, OnInit} from '@angular/core';
import {Article, Dashboard, Case} from 'src/app/api.model';
import {ApiService} from 'src/app/api.service';
import sweetAlert from 'sweetalert2';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {
  loading: boolean;
  data: Dashboard;
  error = false;
  drc: Case;
  articles: Article[];
  timer: any;

  constructor(private apiService: ApiService, private domSanitizer: DomSanitizer) {
  }

  get updatedAt() {
    return (new Date(this.data.lastUpdate)).toLocaleString('fr-FR');
  }

  loadArticles() {
    this.apiService.getArticles()
      .subscribe(data => {
        this.articles = data;
        this.articles.forEach(a => {
          if (a.type === 'video') {
            a.link = this.domSanitizer.bypassSecurityTrustResourceUrl(a.link) as string;
          }
        });
      });
  }

  loadDRC() {
    const id = 'congo (kinshasa)';
    this.loading = true;
    this.apiService.getConfirmed()
      .subscribe(
        data => {
          const country = data.find(d => {
            return `${d.countryRegion}`.toLowerCase() === id;
          });
          if (country) this.drc = country;
        }
      );
  }

  load() {
    this.loading = true;
    this.apiService.getDashboard()
      .subscribe(
        data => {
          this.data = data;
          this.loading = false;
        },
        e => {
          sweetAlert.fire(
            'Oups',
            'Impossible de contacter le Serveur, Vérifiez votre connexion internet',
            'error'
          );
          this.loading = false;
          this.error = true;
        }
      );
  }

  ngOnInit(): void {
    this.loadDRC();
    this.load();
    this.loadArticles();
    this.timer = setInterval(this.load, 300000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}

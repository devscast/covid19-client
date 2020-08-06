import {Component, OnInit, OnDestroy} from '@angular/core';
import {Article, Dashboard, CongoCase} from '../../models/backend.model';
import sweetAlert from 'sweetalert2';
import {DomSanitizer} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

import {BackendService} from '../../services/backend.service';
import {Covid19Service} from '../../services/covid19.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {
  loading: boolean;
  data: Dashboard;
  error = false;
  drc: CongoCase;
  articles: Article[];

  constructor(
    private backendService: BackendService,
    private covid19Service: Covid19Service,
    private domSanitizer: DomSanitizer,
    public translate: TranslateService,
  ) {
  }

  get updatedAt() {
    return (new Date(this.data.lastUpdate)).toLocaleString('fr-FR');
  }

  loadArticles() {
    this.backendService.getArticles()
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
    this.loading = true;
    this.backendService.getCongoCase().subscribe(data => this.drc = data);
  }

  load() {
    this.loading = true;
    this.covid19Service.getDashboard()
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
  }

  ngOnDestroy(): void {
  }
}

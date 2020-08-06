import {Component, OnInit, OnDestroy} from '@angular/core';
import {Article, Dashboard, CongoCase} from '../../models/backend.model';
import sweetAlert from 'sweetalert2';
import {DomSanitizer} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

import {BackendService} from '../../services/backend.service';
import {Covid19Service} from '../../services/covid19.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {
  data: Dashboard;
  error = false;
  drc: CongoCase;
  articles: Article[];
  private subscription = new Subscription();

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
    this.backendService.getCongoCase().subscribe(data => this.drc = data);
  }

  load() {
    this.covid19Service.getDashboard()
      .subscribe(
        data => {
          this.data = data;
        },
        e => {
          sweetAlert.fire(
            'Oups',
            'Impossible de contacter le Serveur, Vérifiez votre connexion internet',
            'error'
          );
          this.error = true;
        }
      );
  }

  ngOnInit(): void {
    this.subscription.add(this.loadDRC());
    this.subscription.add(this.load());
    this.subscription.add(this.loadArticles());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

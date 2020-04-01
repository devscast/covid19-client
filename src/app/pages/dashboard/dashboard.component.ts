import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList,
  OnDestroy
} from '@angular/core';
import {Article, Dashboard, Case, CongoCase} from 'src/app/api.model';
import {ApiService} from 'src/app/api.service';
import sweetAlert from 'sweetalert2';
import {DomSanitizer} from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit{
  loading: boolean;
  data: Dashboard;
  error = false;
  drc: CongoCase;
  articles: Article[];
  timer: any;

  constructor(
    private apiService: ApiService,
    private domSanitizer: DomSanitizer,
    public translate: TranslateService,
    private elRef: ElementRef
  ) {
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
    this.loading = true;
    this.apiService.getCongoCase()
      .subscribe(data => this.drc = data);
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
  title = "Animated Count";

  nums: Array<number> = [25, 76, 48];

  @ViewChild("oneItem", { static: true }) oneItem: any;
  @ViewChildren("count") count: QueryList<any>;

  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      console.log(this.elRef.nativeElement.innerText);
    }, 1000);
  }

  animateCount() {
    let _this = this;

    let single = this.oneItem.nativeElement.innerHTML;

    this.counterFunc(single, this.oneItem, 300000);

    this.count.forEach(item => {
      _this.counterFunc(item.nativeElement.innerHTML, item, 300000);
    });
  }

  counterFunc(end: number, element: any, duration: number) {
    let range, current: number, step, timer;

    range = end - 0;
    current = 0;
    step = Math.abs(Math.floor(duration / range));

    timer = setInterval(() => {
      current += 1;
      element.nativeElement.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }
}

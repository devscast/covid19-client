import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountriesList, Country, Dashboard} from 'src/app/api.model';
import {ApiService} from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {
  loading: boolean;
  data: Dashboard;
  timer: any;

  constructor(private apiService: ApiService) {
  }

  get updatedAt() {
    return (new Date(this.data.lastUpdate)).toLocaleString('fr-FR');
  }

  load() {
    this.loading = true;
    this.apiService.getDashboard()
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  ngOnInit(): void {
    this.load();
    this.timer = setInterval(this.load, 300000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}

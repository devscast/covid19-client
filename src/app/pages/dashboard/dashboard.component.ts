import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/api.model';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  loading: boolean;
  data: Dashboard;

  constructor(private apiService: ApiService) { }

  get updatedAt() {
    let date = new Date(this.data.lastUpdate);
    return date.toLocaleString('fr-FR')
  }

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getDashboard()
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      })
  }

}

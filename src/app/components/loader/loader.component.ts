import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  template: `
    <div *ngIf="isLoading | async">
      <div class="dimmer">
        <div class="lds-dual-ring"></div>
      </div>
    </div>
  `
})
export class LoaderComponent implements OnInit {

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit(): void {
  }

}

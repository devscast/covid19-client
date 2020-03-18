import {Component, OnDestroy, OnInit} from '@angular/core';
import {Image} from '../../api.model';
import {ApiService} from '../../api.service';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit, OnDestroy {
  loading: boolean;
  data: Image[];
  error: boolean;
  timer: any;

  constructor(private apiService: ApiService) {
  }

  load() {
    this.loading = true;
    this.apiService.getImages()
      .subscribe(
        data => {
          this.data = data;
          this.loading = false;
        }, e => {
          sweetAlert.fire(
            'Oups',
            'Impossible de contacter le Serveur, Vérifiez votre connexion internet',
            'error'
          );
          console.log(e);
          this.loading = false;
          this.error = true;
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

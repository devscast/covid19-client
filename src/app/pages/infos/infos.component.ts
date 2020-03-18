import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import sweetAlert from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styles: []
})
export class InfosComponent implements OnInit {
  lang: string;
  number: string;
  loading: boolean;
  error: boolean;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.apiService.addContact({number: this.number, lang: this.lang})
      .subscribe(
        () => {
          this.loading = false;
          sweetAlert.fire('Succès', 'Vous Recevrez désormais les mises à jour par SMS', 'success');
          this.router.navigate(['/dashboard']);
        },
        e => {
          if (e.status === 400) {
            this.loading = false;
            sweetAlert.fire('Erreur', e.error.detail, 'warning');
          } else {
            sweetAlert.fire(
              'Oups',
              'Impossible de contacter le Serveur, Vérifiez votre connexion internet',
              'warning'
            );
          }
        }
      );
  }
}

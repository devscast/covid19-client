import {Component, OnDestroy, OnInit} from '@angular/core';
import sweetAlert from 'sweetalert2';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {BackendService} from '../../services/backend.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styles: []
})
export class InfosComponent implements OnInit, OnDestroy {
  lang: string;
  number: string;
  error: boolean;

  private subscription = new Subscription();

  constructor(
    private backendService: BackendService,
    private router: Router,
    public translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.subscription.add(
      this.backendService.addContact({number: this.number, lang: this.lang})
        .subscribe(
          async () => {
            await sweetAlert.fire('Succès', 'Vous Recevrez désormais les mises à jour par SMS', 'success');
            await this.router.navigate(['/dashboard']);
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

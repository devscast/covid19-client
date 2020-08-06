import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {EMPTY, Observable, TimeoutError} from 'rxjs';
import {catchError, finalize, timeout} from 'rxjs/operators';

import {LoaderService} from '../services/loader.service';
import sweetAlert from 'sweetalert2';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {
  }

  private async showRequestFailedAlert(message: string | null = null) {
    await sweetAlert.fire(
      'Oups',
      message ?? 'Impossible de contacter le Serveur, Vérifiez votre connexion internet',
      'error'
    );
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();

    return next.handle(req).pipe(
      timeout(10000),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 400:
              this.showRequestFailedAlert(error.error.detail);
              return EMPTY;
            default:
              this.showRequestFailedAlert();
              return EMPTY;
          }
        } else if (error instanceof TimeoutError) {
          this.showRequestFailedAlert(error.message);
          return EMPTY;
        }
      }),
      finalize(() => this.loaderService.hide())
    );
  }
}

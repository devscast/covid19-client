import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {HeadersInterceptor} from './interceptors/headers.interceptor';
import {LoaderInterceptor} from './interceptors/loader.interceptor';

export const interceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
];

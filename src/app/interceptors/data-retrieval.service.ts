import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';

let count = 1;

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalInterceptor implements HttpInterceptor {

  constructor(
    private spinner: SpinnerService

  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          this.spinner.requestSpinner$.next(true)
          if (event instanceof HttpResponse) {
            // console.log(`%cEstoy recibiendo una respuesta del servidor: ${JSON.stringify(event,null,2)}`,'color:gold');
            // console.log(`%cEstoy recibiendo una respuesta del servidor!!! contador:${count++}`, 'color:gold');
            this.spinner.requestSpinner$.next(false);
          }
          return event
        })
      );
  }
}


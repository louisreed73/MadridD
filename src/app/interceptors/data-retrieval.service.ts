import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { InfiniteScrollService } from '../services/infinite-scroll.service';

let count = 1;

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalInterceptor implements HttpInterceptor {

  constructor(
    private infiniteScroll: InfiniteScrollService

  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // console.log(`%cEstoy recibiendo una respuesta del servidor: ${JSON.stringify(event,null,2)}`,'color:gold');
            console.log(`%cEstoy recibiendo una respuesta del servidor!!! contador:${count++}`, 'color:gold');
            this.infiniteScroll.requestSpinner$.next(false)
          }
          return event
        })
      );
  }
}


import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

let count=1;

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
    .pipe(
      map((event:HttpEvent<any>)=>{
        if(event instanceof HttpResponse) {
          // console.log(`%cEstoy recibiendo una respuesta del servidor: ${JSON.stringify(event,null,2)}`,'color:gold');
          console.log(`%cEstoy recibiendo una respuesta del servidor!!! contador:${count++}`,'color:gold');
          
        }
        return event
      })
      );      
  }
}

// .pipe(
//   map((event:HttpEvent<any>)=>{
//     if (event instanceof HttpResponse) {
//         console.log(`Estoy recibiendo la respuesta: ${JSON.stringify(event,null,2)}`);
//         // console.log(`Estoy recibiendo la respuesta total: ${event.body.length}`);
//         console.log(`Estoy recibiendo el X-Total-Count: ${event.headers.get('X-Total-Count')}`);
//         // let numTotal=event.headers.get('X-Total-Count');
//         let numTotal=firstCall?event.body.length:event.headers.get('X-Total-Count');
//         let numPag=event.body.length;
//         console.log(`El numero total de respuesta es: ${numTotal}`)
//         this.servicioCount.numTotalLength$.next(+numTotal);
//         this.servicioCount.numTotalPag$.next(+numPag);
//         firstCall=false;
        
//     }
//     return event
//   })
// )
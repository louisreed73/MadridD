import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

const url = "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos"

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  inputAndFiltersData$:BehaviorSubject<any>=new BehaviorSubject({searchInput:""});
  documentos$:BehaviorSubject<any>=new BehaviorSubject(null);
  documentosLength$:BehaviorSubject<any>=new BehaviorSubject(null);
  documentosEscritos$:BehaviorSubject<any>=new BehaviorSubject(null);
  documentosResoluciones$:BehaviorSubject<any>=new BehaviorSubject(null);
  documentosEscritosLength$:BehaviorSubject<any>=new BehaviorSubject(null);
  documentosResolucionesLength$:BehaviorSubject<any>=new BehaviorSubject(null);

  constructor(private http:HttpClient) {

    this.inputAndFiltersData$
    .pipe(
      map(v=>v.searchInput),
      tap(v=>{
        console.log(v)
      }),
      switchMap(v=>{
        return this.http.get<any>(`${url}/?q=${v}`)
        .pipe(
          catchError(this.handleError),
          tap((documents)=>{
            console.log(documents);
            let filtroEscritos=documents.filter(doc=>doc.tipo==="escrito")
            this.documentosEscritos$.next(filtroEscritos);      
            this.documentosEscritosLength$.next(filtroEscritos.length);
          }),
          tap((documents)=>{
            console.log(documents);
            let filtroResolucion=documents.filter(doc=>doc.tipo==="resolucion")
            this.documentosResoluciones$.next(filtroResolucion);
            this.documentosResolucionesLength$.next(filtroResolucion.length);
          })
        )
      }),
      
    )
    .subscribe(d=>{
      console.log(d,this)

      this.documentos$.next(d);
      this.documentosLength$.next(d.length)
    },
    (e)=>{
      this.documentos$.next(e);
      this.documentosEscritos$.next(e);
      this.documentosResoluciones$.next(e);
    }
    )
   }

   handleError(e) {
     console.log(e);
     return throwError(e)
   }


}

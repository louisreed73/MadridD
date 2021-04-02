import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, pipe, Subject, throwError } from 'rxjs';
import { catchError, concatMap, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { log } from '../utilities/utilities';

const url = "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos"


@Injectable({
  providedIn: 'root'
})
export class CombinacionService {

  inputSearch$: Subject<string> = new Subject();
  formularioFiltros$: Subject<{}> = new Subject();
  pagina$: Subject<number> = new Subject();

  search;
  formulario;
  pagina;
  totalDocsQuery$:Observable<any>;
  data = [];

  
  
  // documentosLength$: BehaviorSubject<any> = new BehaviorSubject({});
  documentosLength$: BehaviorSubject<number> = new BehaviorSubject(null);
  documentosTotalQueryLength$: BehaviorSubject<number> = new BehaviorSubject(null);
  documentosEscritos$: BehaviorSubject<{}> = new BehaviorSubject({});
  documentosEscritosLength$: BehaviorSubject<number> = new BehaviorSubject(null);
  documentosResoluciones$: BehaviorSubject<{}> = new BehaviorSubject({});
  documentosResolucionesLength$: BehaviorSubject<number> = new BehaviorSubject(null);
  



  combinado$ = combineLatest(
    this.inputSearch$.asObservable(),
    this.formularioFiltros$.asObservable(),
    this.pagina$.asObservable()
  )
    .pipe(
      tap((v) => {
        log(v, "Este es el combinado desde search", "lightgreen");
        this.search = v[0];
        this.formulario = v[1];
        this.pagina = v[2];
      }),
      switchMap(([search, formulario, pagina]) => {
        return this.http.get<any>(`${url}?q=${this.search}&_page=${this.pagina}&_limit=2`)
    
        // return of(datosQuery)
      }),
      tap((v) => {
        this.totalDocsQuery$=this.http.get<any>(`${url}?q=${this.search}`)
      }),
      switchMap((v) => {
        // log(v, "Este es el combinado desde search", "lightgreen");
        log(this.search, "Este es el combinado desde search", "purple");
        log(this.formulario, "Este es el combinado desde search", "gold");
        

        if (this.pagina === 1) {
          this.data = v;
          this.totalDocsQuery$.subscribe(d=>{

            log(d, "Este es el número total de documentos de esta query: ", "lightred");
            this.documentosTotalQueryLength$.next(d.length)
          })
        }
        else {
          this.data = this.data.concat(v);
        }
        // log(this.data,"Array acumulado!!! ?","yellow")
        return of(this.data)
      }),
      tap((documents) => {
        this.documentosLength$.next(documents.length);
        //Realizamos el filtro de escritos.
        let filtroEscritos = documents.filter(doc => doc.tipo === "escrito")
        // Enviamos el filtro de 'solo escritos' de los datos de busqueda + filtros. Será recibido en search-escritos.component.
        this.documentosEscritos$.next(filtroEscritos);
        // Enviamos el contador de registros del dato anterior al componente que se subscribe a este Subject: filter-tabs.component      
        this.documentosEscritosLength$.next(filtroEscritos.length);
        //Realizamos el filtro de resoluciones.
        let filtroResoluciones = documents.filter(doc => doc.tipo === "resolucion")
        // Enviamos el filtro de 'solo resoluciones' de los datos de busqueda + filtros. Será recibido en search-resoluciones.component.
        this.documentosResoluciones$.next(filtroResoluciones);
        // Enviamos el contador de resoluciones del dato anterior al componente que se subscribe a este Subject: filter-tabs.component      
        this.documentosResolucionesLength$.next(filtroResoluciones.length);
      }),
      shareReplay()


    )


  constructor(private http: HttpClient) {

  }

  handleError(e) {
    // console.log(e);
    return throwError(e)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, of, Subject, Subscription, throwError } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import { DocsEscritosService } from './docs-escritos.service';
import { DocsResolucionesService } from './docs-resoluciones.service';

const url = "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos"


@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  inputSearch$: Subject<string> = new Subject();
  formularioFiltros$: Subject<{}> = new Subject();
  pagina$: Subject<number> = new Subject();

  search;
  formulario;
  pagina;
  pageLimit = 5;

  documentosTotalQueryLengthS: Subscription;
  data = [];
  docsQueryTotal: number;
  percentage: number;



  documentosLength$: BehaviorSubject<number> = new BehaviorSubject(null);
  documentosTotalQueryLength$: BehaviorSubject<number> = new BehaviorSubject(null);
  stopScroll$: BehaviorSubject<boolean> = new BehaviorSubject(false);





  documentos$ = combineLatest(
    this.inputSearch$.asObservable(),
    this.formularioFiltros$.asObservable(),
    this.pagina$.asObservable()
  )
    .pipe(
      tap((v) => {
        this.search = v[0];
        this.formulario = v[1];
        this.pagina = v[2];
      }),
      switchMap(([search, formulario, pagina]) => {
        if (this.pagina < 2) {

          this.documentosTotalQueryLengthS = this.http.get<any>(`${url}?q=${this.search}`).subscribe(d => {

            this.documentosTotalQueryLength$.next(d.length);

            this.docsQueryTotal = d.length;
          })
        }


        this.stopScroll$.next(true);
        return this.http.get<any>(`${url}?q=${this.search}&_page=${this.pagina}&_limit=${this.pageLimit}`)

      }),
      tap((v) => {
        this.documentosTotalQueryLengthS
          .unsubscribe();
      }),
      switchMap((v) => {
        if (this.pagina < 2) {
          this.data = v;
        }
        if (this.pagina > 1) {
          this.data = this.data.concat(v);
        }
        return of(this.data)
      }),
      tap((documents) => {

        //Realizamos el filtro de escritos.
        let filtroEscritos = documents.filter(doc => doc.tipo === "escrito");

        // Enviamos el filtro de 'solo escritos' de los datos de busqueda + filtros. Será recibido en search-escritos.component.
        this.docsEscritos.docsEscritosSource$.next(filtroEscritos);
        // Enviamos el contador de registros del dato anterior al componente que se subscribe a este Subject: filter-tabs.component              
        this.docsEscritos.documentosEscritosLength$.next(filtroEscritos.length);





        this.documentosLength$.next(documents.length);

        //Realizamos el filtro de resoluciones.
        let filtroResoluciones = documents.filter(doc => doc.tipo === "resolucion")
        // Enviamos el filtro de 'solo resoluciones' de los datos de busqueda + filtros. Será recibido en search-resoluciones.component.
        this.docsResoluciones.docsResolucionesSource$.next(filtroResoluciones);
        // Enviamos el contador de resoluciones del dato anterior al componente que se subscribe a este Subject: filter-tabs.component      
        this.docsResoluciones.documentosResolucionesLength$.next(filtroResoluciones.length);

        if (documents.length / this.docsQueryTotal >= 1) {
          this.stopScroll$.next(true);
          console.log(`%c${documents.length / this.docsQueryTotal}`, "lightred");
        }
        else {
          this.stopScroll$.next(false);
          console.log(`%c${documents.length / this.docsQueryTotal}`, "lightred");
        }
      }),
      shareReplay()


    )


  constructor(
    private http: HttpClient,
    private docsEscritos: DocsEscritosService,
    private docsResoluciones: DocsResolucionesService

  ) {

  }

  handleError(e) {
    return throwError(e)
  }
}

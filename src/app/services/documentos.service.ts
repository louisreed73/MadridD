import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
     BehaviorSubject,
     combineLatest,
     of,
     Subject,
     Subscription,
     throwError,
} from "rxjs";
import { catchError, shareReplay, switchMap, tap } from "rxjs/operators";
import { log } from "../utilities/utilities";
import { DocsEscritosService } from "./docs-escritos.service";
import { DocsResolucionesService } from "./docs-resoluciones.service";

const urlWell =
     "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos";
const urlWrong =
     "https://my-json-server2.typicode.com/louisreed73/fakeAPI/documentos";

@Injectable({
     providedIn: "root",
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
     url: string;

     documentosLength$: BehaviorSubject<number> = new BehaviorSubject(null);
     documentosTotalQueryLength$: BehaviorSubject<number> = new BehaviorSubject(
          null
     );
     stopScroll$: BehaviorSubject<boolean> = new BehaviorSubject(false);
     url$: BehaviorSubject<string> = new BehaviorSubject(
          "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos"
     );

     documentos$ = combineLatest(
          this.inputSearch$.asObservable(),
          this.formularioFiltros$.asObservable(),
          this.pagina$.asObservable(),
          this.url$.asObservable()
     ).pipe(
          tap(([search, formulario, pagina, url]) => {
               this.search = search;
               this.formulario = formulario;
               this.pagina = pagina;
               this.url = url;
          }),
          switchMap((obsCombined) => {
               if (this.pagina < 2) {
                    this.documentosTotalQueryLengthS = this.http
                         .get<any>(`${this.url}?q=${this.search}`)
                         .subscribe((d) => {
                              this.documentosTotalQueryLength$.next(d.length);

                              this.docsQueryTotal = d.length;
                         });
               }

               this.stopScroll$.next(true);
               return this.http.get<any>(
                    `${this.url}?q=${this.search}&_page=${this.pagina}&_limit=${this.pageLimit}`
               );
          }),
          catchError((err) => {
               this.docsEscritos.docsEscritosSource$.error(err);
               this.docsResoluciones.docsResolucionesSource$.error(err);
               return throwError(err);
          }),
          switchMap((obsPagination) => {
               if (this.pagina < 2) {
                    this.data = obsPagination;
               }
               if (this.pagina > 1) {
                    this.data = this.data.concat(obsPagination);
               }
               return of(this.data);
          }),
          tap((documentsQueryAcum) => {
               //Realizamos el filtro de escritos.
               let filtroEscritos = documentsQueryAcum.filter(
                    (doc) => doc.tipo === "escrito"
               );

               // Enviamos el filtro de 'solo escritos' de los datos de busqueda + filtros. Será recibido en search-escritos.component.
               this.docsEscritos.docsEscritosSource$.next(filtroEscritos);
               // Enviamos el contador de registros del dato anterior al componente que se subscribe a este Subject: filter-tabs.component
               this.docsEscritos.documentosEscritosLength$.next(
                    +filtroEscritos.length
               );

               this.documentosLength$.next(documentsQueryAcum.length);

               //Realizamos el filtro de resoluciones.
               let filtroResoluciones = documentsQueryAcum.filter(
                    (doc) => doc.tipo === "resolucion"
               );
               // Enviamos el filtro de 'solo resoluciones' de los datos de busqueda + filtros. Será recibido en search-resoluciones.component.
               this.docsResoluciones.docsResolucionesSource$.next(
                    filtroResoluciones
               );
               // Enviamos el contador de resoluciones del dato anterior al componente que se subscribe a este Subject: filter-tabs.component
               log(filtroResoluciones.length, "esto es un error?", "pink");

               this.docsResoluciones.documentosResolucionesLength$.next(
                    +filtroResoluciones.length
               );

               if (documentsQueryAcum.length / this.docsQueryTotal >= 1) {
                    this.stopScroll$.next(true);
                    console.log(
                         `%c${documentsQueryAcum.length / this.docsQueryTotal}`,
                         "lightred"
                    );
               } else {
                    this.stopScroll$.next(false);
                    console.log(
                         `%c${documentsQueryAcum.length / this.docsQueryTotal}`,
                         "lightred"
                    );
               }
          }),
          shareReplay()
     );

     constructor(
          private http: HttpClient,
          private docsEscritos: DocsEscritosService,
          private docsResoluciones: DocsResolucionesService
     ) {}

     // handleError(e) {
     //   return throwError(e)
     // }
}

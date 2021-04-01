import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
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
  data = [];

  documentosEscritos$: Subject<any> = new Subject();
  documentosEscritosLength$: Subject<any> = new Subject();



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
        return this.http.get<any>(`${url}?q=${this.search}&_page=${this.pagina}&_limit=3`)
      }),
      concatMap((v) => {
        log(v, "Este es el combinado desde search", "lightgreen");
        log(this.search, "Este es el combinado desde search", "purple");
        log(this.formulario, "Este es el combinado desde search", "gold");
        if (this.pagina === 1) {
          this.data = v;
        }
        else {
          this.data = this.data.concat(v);
        }
        // log(this.data,"Array acumulado!!! ?","yellow")
        return of(this.data)
      }),
      tap((documents) => {
        //Realizamos el filtro de escritos.
        let filtroEscritos = documents.filter(doc => doc.tipo === "escrito")
        // Enviamos el filtro de 'solo escritos' de los datos de busqueda + filtros. Será recibido en search-escritos.component.
        this.documentosEscritos$.next(filtroEscritos);
        // Enviamos el contador de registros del dato anterior al componente que se subscribe a este Subject: filter-tabs.component      
        this.documentosEscritosLength$.next(filtroEscritos.length);
      }),


    )


  constructor(private http: HttpClient) {

  }
}

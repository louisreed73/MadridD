import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

// Fake API url para hacer peticiones de búsqueda de documentos.
const url = "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos"

@Injectable({
  providedIn: 'root'
})
export class DocumentosService implements OnDestroy {

  /**
   * @property {BehaviorSubject<any>} inputAndFiltersData$ Behaviour Subject que recibe los datos a partir del evento del input de búsqueda. Recibe el string de Búsqueda y el formulario con los datos para filtrar.
   * 
   * Desde el archivo search-form.component.ts Con un debounceTime de 300 ms. Con los Datos de Búsqueda recibe los datos de la api y después de recibirlos aplica el filtro.
   * 
   * Finalmente llama a next al BehaviorSubject documentos$ con estos datos de búsqueda y con los filtros que estén habilitados.
   */
  inputAndFiltersData$: BehaviorSubject<any> = new BehaviorSubject({ searchInput: "" });
  /**
 * @property {BehaviorSubject<any>} documentos$ Behaviour Subject que envia los datos de la api por el término de búsqueda y si aplica, los filtros. lo realiza en la linea 72 cuando se subscribe para realizar el filtrado de la API, en el callback de next del observable. Se subscribe search-documentos.component
 */
  documentos$: BehaviorSubject<any> = new BehaviorSubject(null);
  /**
 * @property {BehaviorSubject<any>} documentosLength$ Behaviour Subject que envia los datos del número de registros del filtrado por término de búsqueda + filtros de la API. Se actualiza con el evento de change del input. Se subscribe filter-tabs.component
 */
  documentosLength$: BehaviorSubject<any> = new BehaviorSubject(null);
  /**
 * @property {BehaviorSubject<any>} documentosEscritos$ Behaviour Subject que envia los datos de la api por el término de búsqueda y si aplica, los filtros pero 'sólo escritos'!! . lo realiza en la linea 67. cuando se subscribe para realizar el filtrado de la API, en el callback de next del observable. Se subscribe search-escritos.component
 */
  documentosEscritos$: BehaviorSubject<any> = new BehaviorSubject(null);
  /**
 * @property {BehaviorSubject<any>} documentosResoluciones$ Behaviour Subject que envia los datos de la api por el término de búsqueda y si aplica, los filtros pero 'sólo escritos'!! . lo realiza en la linea 67. cuando se subscribe para realizar el filtrado de la API, en el callback de next del observable. Se subscribe search-resoluciones.component
 */
  documentosResoluciones$: BehaviorSubject<any> = new BehaviorSubject(null);
  /**
 * @property {BehaviorSubject<any>} documentosEscritosLength$ Behaviour Subject que envia los datos del número de registros del filtrado por término de búsqueda + filtros de la API ,'sólo Escritos'!!. Se actualiza con el evento de change del input. Se subscribe filter-tabs.component
 */
  documentosEscritosLength$: BehaviorSubject<any> = new BehaviorSubject(null);
  /**
 * @property {BehaviorSubject<any>} documentosResolucionesLength$ Behaviour Subject que envia los datos del número de registros del filtrado por término de búsqueda + filtros de la API ,'sólo Resoluciones'!!. Se actualiza con el evento de change del input. Se subscribe filter-tabs.component
 */
  documentosResolucionesLength$: BehaviorSubject<any> = new BehaviorSubject(null);
  /**
 * @property {BehaviorSubject<any>} inputandFiltersData$Subscription Subscription referencia para elminar en el evento de destrucción de este Servicio.
 */
  inputandFiltersData$Subscription: Subscription;

  constructor(private http: HttpClient) {

    this.inputandFiltersData$Subscription = this.inputAndFiltersData$
      .pipe(
        // Por el momento, no usamos los datos de filtro devolvemos solo el string de búsqueda desde search-form.component. Existe otra propiedad: 'host' que todavia no utilizamos. Solo 'searchInput' el string de búsqueda.
        map(v => v.searchInput),
        tap(v => {
          // console.log(v)
        }),
        switchMap(v => {
          // hacemos una llamada a la api con la query del string de busqueda.
          return this.http.get<any>(`${url}/?q=${v}`)
            .pipe(
              //manejamos el error de llamada a API. Lo que devuelve el error puede reenviarse en el callback de error en la subscripción: linea 61
              catchError(this.handleError),
              // tap((documents) => {
              //   //Realizamos el filtro de escritos.
              //   let filtroEscritos = documents.filter(doc => doc.tipo === "escrito")
              //   // Enviamos el filtro de 'solo escritos' de los datos de busqueda + filtros. Será recibido en search-escritos.component.
              //   this.documentosEscritos$.next(filtroEscritos);
              //   // Enviamos el contador de registros del dato anterior al componente que se subscribe a este Subject: filter-tabs.component      
              //   this.documentosEscritosLength$.next(filtroEscritos.length);
              // }),
              tap((documents) => {
                //Realizamos el filtro de resoluciones.
                let filtroResolucion = documents.filter(doc => doc.tipo === "resolucion")
                // Enviamos el filtro de 'solo resoluciones' de los datos de busqueda + filtros. Será recibido en search-resoluciones.component.
                this.documentosResoluciones$.next(filtroResolucion);
                // Enviamos el contador de registros del dato anterior al componente que se subscribe a este Subject: filter-tabs.component      
                this.documentosResolucionesLength$.next(filtroResolucion.length);
              })
            )
        }),

      )
      .subscribe(d => {
        // console.log(d, this)

        // enviamos los datos de busqueda y filtrado si existen.
        this.documentos$.next(d);
        // enviamos el dato del número de registros con el string de búsqueda y filtrado si existen.
        this.documentosLength$.next(d.length)
      },
        (e) => {
          //Manejamos el error en caso de respuesta errónea de la API o los datos de búsqueda para enviarlo a los archivos que se subscriben a este Subject. Los archivos: search-documents.component, search-escritos.component y search-resoluciones.component
          this.documentos$.next(e);
          this.documentosEscritos$.next(e);
          this.documentosResoluciones$.next(e);
        }
      )
  }

  // Manejador de Error, reenviamos un Observable con el error.
  handleError(e) {
    // console.log(e);
    return throwError(e)
  }

  ngOnDestroy(): void {
    //Hacemos unsubscribe cuando se elimine este servicio.
    //Evitamos memory leaks

    this.inputandFiltersData$Subscription.unsubscribe()

  }


}

import { DOCUMENT } from "@angular/common";
import {
     ChangeDetectionStrategy,
     Component,
     Inject,
     OnDestroy,
} from "@angular/core";
import { of, Subscription } from "rxjs";
import { catchError} from "rxjs/operators";
import { DocsResolucionesService } from "src/app/services/docs-resoluciones.service";
import { DocumentosService } from "src/app/services/documentos.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
     selector: "app-search-resoluciones",
     templateUrl: "./search-resoluciones.component.html",
     styleUrls: ["./search-resoluciones.component.scss"],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResolucionesComponent implements OnDestroy {
     /*=============================================
    =            Observables            =
    =============================================*/

     // Recibimos el Observable con los datos del número total de documentos / Resoluciones / por término de búsqueda acumulado en pagination.
     docsResoluciones$ = this.docsResoluciones.docsResolucionesSource$.pipe(
          catchError((e: any) => {
               // Saving error message from http Request Error
               this.errorObj = e.name;
               //TODO to comment and uncomment if necessary for checking response and reload page
               //TODO stopping spinner on http request error
               // this.spinner.requestSpinner$.next(false);
               //TODO to remove only for checking response and reload page
               setTimeout(() => {
                    this._document.defaultView.location.reload();
               }, 4000);
               return of([]);
          })
     );

     // Observable con el nº total de documentos / Resoluciones / del término de búsqueda
     docsResolucionesLength$ = this.docsResoluciones.documentosResolucionesLength$;

     /*=====  End of Observables  ======*/

     /*=============================================
 =            Subscriptions            =
 =============================================*/

     // Nos subscribimos al Observable de Documentos acumulados de pagination. Para actualizar en esta sección el filtro global del término de búsqueda.
     documentosSub: Subscription = this.documentos.documentos$.subscribe();

     /*=====  End of Subscriptions  ======*/

     /*=============================================
=            Error Obj member            =
=============================================*/

     // To Save error message in case Http Request Error
     errorObj;

     /*=====  End of Error Obj member  ======*/

     constructor(
          private documentos: DocumentosService,
          private docsResoluciones: DocsResolucionesService,
          private spinner: SpinnerService,
          //TODO to remove only for checking response and reload page
          @Inject(DOCUMENT) private _document: Document
     ) {}

     // Método para comprobar que los datos del OBservable son efectivamente un array
     isArray(obj) {
          return Array.isArray(obj);
     }

     ngOnDestroy(): void {
          this.documentosSub.unsubscribe();
     }
}

import { DOCUMENT } from "@angular/common";
import {
     ChangeDetectionStrategy,
     Component,
     Inject,
     OnDestroy,
} from "@angular/core";
import { combineLatest, of, Subscription } from "rxjs";
import { catchError, delay, tap } from "rxjs/operators";
import { DocsEscritosService } from "src/app/services/docs-escritos.service";
import { DocumentosService } from "src/app/services/documentos.service";
import { FiltrosService } from "src/app/services/filtros.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
     selector: "app-search-escritos",
     templateUrl: "./search-escritos.component.html",
     styleUrls: ["./search-escritos.component.scss"],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchEscritosComponent implements OnDestroy {
     /*=============================================
    =            Observables            =
    =============================================*/

     // Recibimos el Observable con los datos del número total de documentos / Escritos / por término de búsqueda acumulado en pagination.
     docsEscritos$ = this.docsEscritos.docsEscritosSource$.pipe(
          catchError((e: any) => {
               // Saving error message from http Request Error
               this.errorObj = e.name;
               //TODO to comment and uncomment if necessary for checking response and reload page
               //TODO stopping spinner on http request error
               // this.spinner.requestSpinner$.next(false);
               //TODO to remove only for checking response and reload page
               setTimeout(() => {
                    this.window.document.defaultView.location.reload();
               }, 4000);
               return of([]);
          })
     );

     // Observable con el nº total de documentos / Escritos / del término de búsqueda
     docsEscritosLength$ = this.docsEscritos.documentosEscritosLength$;

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

/*=============================================
     =    Incorporacion Integracion nuevo Filtro 20-04-2021 =
     =============================================*/

     // nombrado$_$ = this.filtroS.config$;

     // formA$_$ = this.filtroS.formGrupo$;

     // nombrado1$_$ = this.filtroS.config1$;

     // formA1$_$ = this.filtroS.formGrupo1$;

     filtrosDocumentos;
     filtrosEscritos;

     filtroDocumentosSub = this.filtroS
          .getFiltrosDocumentos()
          .pipe(
               // delay(100)
          )
          .subscribe((data) => {
               // console.log(data);
               this.filtrosDocumentos  = {
                    data,
                    clase:"documentos"
               };
          });

     filtroEscritosSub = this.filtroS
          .getFiltrosEscritos()
          .pipe()
          .subscribe((data) => {
               // console.log(data);
               this.filtrosEscritos = {
                    data,
                    clase:"escritos"
               };
          });

     /*=====  End of Incorporacion Integracion nuevo Filtro  ======*/



     constructor(
          private documentos: DocumentosService,
          private docsEscritos: DocsEscritosService,
          // private spinner: SpinnerService,
          //TODO to remove only for checking response and reload page
          @Inject(Window) private window: Window,
          public filtroS: FiltrosService

     ) {}

     // Método para comprobar que los datos del OBservable son efectivamente un array
     isArray(obj) {
          return Array.isArray(obj);
     }

     ngOnDestroy(): void {
          this.documentosSub.unsubscribe();
          this.filtroDocumentosSub.unsubscribe();
          this.filtroEscritosSub.unsubscribe();
     }
}

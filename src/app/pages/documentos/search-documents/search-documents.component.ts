import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";
import { DocumentosService } from "src/app/services/documentos.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
     selector: "app-search-documents",
     templateUrl: "./search-documents.component.html",
     styleUrls: ["./search-documents.component.scss"],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDocumentsComponent {
     /*=============================================
    =            Observables            =
    =============================================*/

     // Recibimos el Observable con los datos del número total de documentos por término de búsqueda acumulado en pagination.
     documentos$ = this.documentos.documentos$.pipe(
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

     // Observable con el nº total de documentos del término de búsqueda
     docsLength$ = this.documentos.documentosLength$;

     /*=====  End of Observables  ======*/

     /*=============================================
    =            Error Obj member            =
    =============================================*/

     // To Save error message in case Http Request Error
     errorObj;

     /*=====  End of Error Obj member  ======*/

     constructor(
          private documentos: DocumentosService,
          private spinner: SpinnerService,
          //TODO to remove only for checking response and reload page
          @Inject(DOCUMENT) private _document: Document
     ) {}

     // Método para comprobar que los datos del OBservable son efectivamente un array
     isArray(obj) {
          return Array.isArray(obj);
     }
}

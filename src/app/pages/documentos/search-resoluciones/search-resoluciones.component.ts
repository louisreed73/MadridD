import {
     AfterViewInit,
     ChangeDetectionStrategy,
     Component,
     Inject,
     OnDestroy,
     QueryList,
     ViewChildren,
} from "@angular/core";
import { of, Subscription } from "rxjs";
import { catchError} from "rxjs/operators";
import { DocsResolucionesService } from "src/app/services/docs-resoluciones.service";
import { DocumentosService } from "src/app/services/documentos.service";
import { FiltrosService } from "src/app/services/filtros.service";
import { InfoService } from "src/app/services/info.service";
import { FiltroComponent } from "src/app/sharedComponents/filtro/filtro.component";

@Component({
     selector: "app-search-resoluciones",
     templateUrl: "./search-resoluciones.component.html",
     styleUrls: ["./search-resoluciones.component.scss"],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResolucionesComponent implements OnDestroy, AfterViewInit {
     /*=============================================
    =            Observables            =
    =============================================*/

     // Recibimos el Observable con los datos del número total de documentos / Resoluciones / por término de búsqueda acumulado en pagination.
     docsResoluciones$ = this.docsResoluciones.docsResolucionesSource$.pipe(
          catchError((e: any) => {
               // Saving error message from http Request Error
               // this.errorObj = e.name;
               this.infoServ.httpErrorInfo$.next(e.name);

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

     // Observable con el nº total de documentos / Resoluciones / del término de búsqueda
     // docsResolucionesLength$ = this.docsResoluciones.documentosResolucionesLength$;

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
     
     @ViewChildren(FiltroComponent)
     filtrosComp: QueryList<FiltroComponent>;
     toggleCollapseSub:Subscription;     

     filtrosDocumentos;
     filtrosResoluciones;

     filtroDocumentosSub = this.filtroS
          .getFiltrosDocumentos()
          .pipe()
          .subscribe((data) => {
               // console.log(data);
               // this.filtrosDocumentos = data;
               this.filtrosDocumentos = {
                    data:data,
                    clase:"documentos"
               };
          });

     filtroResolucionesSub = this.filtroS
          .getFiltrosResoluciones()
          .pipe()
          .subscribe((data) => {
               // console.log(data);
               this.filtrosResoluciones = {
                    data,
                    clase:"resoluciones"
               };
          });

     /*=====  End of Incorporacion Integracion nuevo Filtro  ======*/


     constructor(
          private documentos: DocumentosService,
          private docsResoluciones: DocsResolucionesService,
          // private spinner: SpinnerService,
          //TODO to remove only for checking response and reload page
          @Inject(Window) private window: Window,
          public filtroS: FiltrosService,
          private infoServ: InfoService

     ) {}

     // Método para comprobar que los datos del OBservable son efectivamente un array
     isArray(obj) {
          return Array.isArray(obj);
     }

     ngAfterViewInit(): void {

          this.toggleCollapseSub=this.filtrosComp.first.triggerCollapse
          .subscribe(d=>{
               console.log("Algo hay que hacer")
               let allToggles=this.filtrosComp.first.toggles.toArray().concat(
                    
                    this.filtrosComp.last.toggles.toArray()
               );
               console.log(allToggles)
               let someCollap=allToggles.some(tog=>{
                    return tog.nativeElement.previousElementSibling.checked
               });

               if(!someCollap) {
                    allToggles.forEach(tog=>{
                         return tog.nativeElement.previousElementSibling.checked=true
                    });
                    
               }  else {
                    allToggles.forEach(tog=>{
                         return tog.nativeElement.previousElementSibling.checked=false
                    });
                         
               }
               console.log(someCollap)
          })
          // this.documentosSub.unsubscribe();
     }


     ngOnDestroy(): void {
          // this.documentosSub.unsubscribe();
          // this.filtroEscritosSub.unsubscribe();
          this.filtroDocumentosSub.unsubscribe();
          this.filtroResolucionesSub.unsubscribe();
          this.toggleCollapseSub.unsubscribe();
          
     }
}

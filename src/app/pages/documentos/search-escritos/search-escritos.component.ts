import { DOCUMENT } from "@angular/common";
import {
     AfterViewInit,
     ChangeDetectionStrategy,
     Component,
     Inject,
     OnDestroy,
     QueryList,
     ViewChildren,
} from "@angular/core";
import { of, Subject, Subscription } from "rxjs";
import { catchError, delay, map, tap } from "rxjs/operators";
import { DocsEscritosService } from "src/app/services/docs-escritos.service";
import { DocumentosService } from "src/app/services/documentos.service";
import { FiltrosService } from "src/app/services/filtros.service";
import { InfoService } from "src/app/services/info.service";
import { FiltroComponent } from "src/app/sharedComponents/filtro/filtro.component";

@Component({
     selector: "app-search-escritos",
     templateUrl: "./search-escritos.component.html",
     styleUrls: ["./search-escritos.component.scss"],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchEscritosComponent implements OnDestroy, AfterViewInit {
     /*=============================================
    =            Observables            =
    =============================================*/

     // Recibimos el Observable con los datos del número total de documentos / Escritos / por término de búsqueda acumulado en pagination.
     docsEscritos$ = this.docsEscritos.docsEscritosSource$.pipe(
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

     // Observable con el nº total de documentos / Escritos / del término de búsqueda
     // docsEscritosLength$ = this.docsEscritos.documentosEscritosLength$;

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
     someCollap$:Subject<boolean>= new Subject();
     toggleCollapseSub:Subscription;     

     filtrosDocumentos;
     filtrosEscritos;


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
          public filtroS: FiltrosService,
          private infoServ: InfoService


     ) {}

     // Método para comprobar que los datos del OBservable son efectivamente un array
     isArray(obj) {
          return Array.isArray(obj);
     }
     ngAfterViewInit(): void {
          this.toggleCollapseSub=this.filtrosComp.first.triggerCollapse
          .pipe(
               delay(0),
               map((d)=>{

                    let allToggles=this.filtrosComp.first.toggles.toArray();
                    let someCollap=allToggles.some(tog=>{
                         return tog.nativeElement.previousElementSibling.checked
                    });
                    // this.someCollap=someCollap;
                    this.someCollap$.next(someCollap)
                    // console.log(someCollap)
                    return of(someCollap)
               }),
          )
          .subscribe((d)=>{
          // console.log("Estoy abriendo!");
          console.log(d)

          })

      
     }

     ngOnDestroy(): void {
          // this.documentosSub.unsubscribe();
          this.filtroDocumentosSub.unsubscribe();
          this.filtroEscritosSub.unsubscribe();
          this.toggleCollapseSub.unsubscribe();
     }

     collapsing() {
          console.log("collapsando!!!");
          console.log("Algo hay que hacer");
          let allToggles=this.filtrosComp.first.toggles.toArray();
          let someCollap=allToggles.some(tog=>{
               return tog.nativeElement.previousElementSibling.checked
          });
          console.log(someCollap)
          
          allToggles.forEach(tog=>{
               console.log(tog.nativeElement.previousElementSibling.checked)
          })

               if(!someCollap) {
                    allToggles.forEach(tog=>{
                         this.someCollap$.next(true);

                         return tog.nativeElement.previousElementSibling.checked=true;
                    });
                    
               }  else {
                    allToggles.forEach(tog=>{
                         this.someCollap$.next(false);

                         return tog.nativeElement.previousElementSibling.checked=false
                    });
                         
               }

        }

}

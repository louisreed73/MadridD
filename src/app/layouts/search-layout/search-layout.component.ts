import {
     ChangeDetectionStrategy,
     Component,
     OnDestroy,
     OnInit,
} from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { DocumentosService } from "src/app/services/documentos.service";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
     selector: "app-search-layout",
     templateUrl: "./search-layout.component.html",
     styleUrls: ["./search-layout.component.scss"],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLayoutComponent implements OnInit, OnDestroy {
     /*=============================================
  =            Subscriptions            =
  =============================================*/

     paginaSub: Subscription;
     stopScrollSub: Subscription;

     /*=====  End of Subscriptions  ======*/

     /*=============================================
=            Observables            =
=============================================*/
     spinner$: Subject<boolean> = this.spinner.requestSpinner$;
     pagina$: Subject<number>;

     /*=====  End of Observables  ======*/

     /*=============================================
=            class members            =
=============================================*/
     //Saving actual num Page
     pagina: number;
     // Saving stop Scroll to properly stop scroll
     stopScroll: boolean;

     /*=====  End of Pagination memeber  ======*/

     constructor(
          private documentos: DocumentosService,
          private spinner: SpinnerService
     ) {}

     ngOnInit() {
          // on Init we subscribe to initial page - ie page 1
          this.paginaSub = this.documentos.pagina$
               .pipe(
                    tap((numPag) => {
                         this.pagina = numPag;
                         console.log(
                              numPag,
                              "Este es el número de página",
                              "pink"
                         );
                    })
               )
               .subscribe();
          // We subscribe to stop Scroll Observable and save it into variable
          this.stopScrollSub = this.documentos.stopScroll$.subscribe(
               (mustStop) => {
                    this.stopScroll = mustStop;
               }
          );
     }

     onScroll() {
          // On scroll we stopped the handler to prevent continously sending request to API
          this.documentos.stopScroll$.next(true);
          // We increment pagination for the next request
          this.documentos.pagina$.next(this.pagina + 1);
     }

     ngOnDestroy(): void {
          // We unsubscribe from actual page
          this.paginaSub.unsubscribe();
     }
}

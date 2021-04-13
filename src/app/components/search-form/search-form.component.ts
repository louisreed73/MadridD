import {
     AfterViewInit,
     ChangeDetectionStrategy,
     Component,
     OnInit,
     ViewChild,
} from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { DocumentosService } from "src/app/services/documentos.service";

const urlWell =
     "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos";
const urlWrong =
     "https://my-json-server2.typicode.com/louisreed73/fakeAPI/documentos";

@Component({
     selector: "app-search-form",
     templateUrl: "./search-form.component.html",
     styleUrls: ["./search-form.component.scss"],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit, AfterViewInit {
     /*=============================================
    =            Subscriptions for this component  =
      =============================================*/

     Subc: Subscription;

     /*=====  End of Subscriptions for this component  ======*/

     /*=============================================
    =            User input references to get data            =
    =============================================*/

     //form Control del input del string de búsqueda
     searchInput = new FormControl();
     // Selections Filters to apply for the documents
     @ViewChild(NgForm, { static: true }) formulario: NgForm;

     /*=====  End of User input references to get data  ======*/

     /*=============================================
    =            class members            =
    =============================================*/

     // Pagination request increment or reset to 1
     pagina: number = 1;
     //TODO to remove after correct Error HTTP request Handling
     // only for checking http request errors
     url: string = urlWell;

     /*=====  End of class members  ======*/

     constructor(private combinacion: DocumentosService) {}

     ngOnInit() {
          // String query for get documents based in this term
          // We subscribe to changes in string query
          this.Subc = this.searchInput.valueChanges
               .pipe(debounceTime(300))
               .subscribe((inputSearch) => {
                    // Stopping the scroll trigger until http request response
                    this.combinacion.stopScroll$.next(true);
                    // Communicate to subscribers change in search query string
                    this.combinacion.inputSearch$.next(inputSearch);
                    // Sending page 1 - always when changed input or selections
                    // Scroll is unique responsible for increment pagination
                    this.combinacion.pagina$.next(this.pagina);
               });
     }
     ngOnDestroy(): void {
          // We subscribe to changes in string query
          this.Subc.unsubscribe();
     }

     ngAfterViewInit(): void {
          // Send first null data to get something in load
          // this.combinacion.formularioFiltros$.next(null);
          // subscribing to changes in selections user inputs
          // this.formulario.valueChanges.subscribe((d) => {
          //      // this.pagina = 1;

          //      // Send first null data to get something in load
          //      // this.combinacion.formularioFiltros$.next(d);
          //      // Sending page 1 - always when changed input or selections
          //      // Scroll is unique responsible for increment pagination
          //      // this.combinacion.pagina$.next(this.pagina);
          // });
     }
     //TODO to remove after correct Error HTTP request Handling
     // toggleURL() {
     //      // Only for checking http Errors / Toggling valid and wrong URL API
     //      this.url = this.url === urlWell ? urlWrong : urlWell;
     //      this.combinacion.url$.next(this.url);
     // }
}

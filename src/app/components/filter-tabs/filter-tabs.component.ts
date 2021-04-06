import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DocsEscritosService } from "src/app/services/docs-escritos.service";
import { DocsResolucionesService } from "src/app/services/docs-resoluciones.service";
import { DocumentosService } from "src/app/services/documentos.service";

@Component({
     selector: "app-filter-tabs",
     templateUrl: "./filter-tabs.component.html",
     styleUrls: ["./filter-tabs.component.scss"],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterTabsComponent implements OnInit {
     /*=============================================
  =            Observables to Subscribe         =
  =============================================*/

     // Recibimos el Observable con los datos del número total de documentos por término de búsqueda.
     documentosTotalQueryLength$ = this.documentos.documentosTotalQueryLength$;
     // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados o pagination.
     documentosLength$ = this.documentos.documentosLength$;
     // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados. 'Solo Escritos'!!!
     escritosLength$ = this.docsEscritos.documentosEscritosLength$;
     // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados. 'Solo Resoluciones'!!!
     resolucionesLength$ = this.docsResoluciones.documentosResolucionesLength$;

     /*=====  Observables to Subscribe End  ======*/

     constructor(
          private documentos: DocumentosService,
          private docsEscritos: DocsEscritosService,
          private docsResoluciones: DocsResolucionesService
     ) {}

     ngOnInit() {}
}

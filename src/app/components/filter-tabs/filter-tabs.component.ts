import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DocsEscritosService } from 'src/app/services/docs-escritos.service';
import { DocsResolucionesService } from 'src/app/services/docs-resoluciones.service';
import { DocumentosService } from 'src/app/services/documentos.service';
// import { DocumentosService } from 'src/app/services/documentos.service';
import { log } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-filter-tabs',
  templateUrl: './filter-tabs.component.html',
  styleUrls: ['./filter-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterTabsComponent implements OnInit {

  // Recibimos el Observable con los datos del número total de documentos por término de búsqueda.
  documentosTotalQueryLength$=this.documentos.documentosTotalQueryLength$;
  // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados o pagination.
  documentosLength$=this.documentos.documentosLength$;
  // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados. 'Solo Escritos'!!!
  escritosLength$=this.docsEscritos.documentosEscritosLength$;
  // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados. 'Solo Resoluciones'!!!
  resolucionesLength$=this.docsResoluciones.documentosResolucionesLength$;
  




  constructor(
    private documentos: DocumentosService,
    private docsEscritos: DocsEscritosService,
    private docsResoluciones: DocsResolucionesService
    ) { }

  ngOnInit() {


  }



}

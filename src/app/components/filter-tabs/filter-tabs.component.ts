import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CombinacionService } from 'src/app/services/combinacion.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { log } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-filter-tabs',
  templateUrl: './filter-tabs.component.html',
  styleUrls: ['./filter-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterTabsComponent implements OnInit {

  // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados.
  documentosLength$=this.combinado.documentosLength$;
  // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados. 'Solo Escritos'!!!
  escritosLength$=this.combinado.documentosEscritosLength$;
  // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados. 'Solo Resoluciones'!!!
  resolucionesLength$=this.combinado.documentosResolucionesLength$;
  
  documentosTotalQueryLength$=this.combinado.documentosTotalQueryLength$;




  constructor(
    // private documentos: DocumentosService,
    private combinado: CombinacionService
    ) { }

  ngOnInit() {


  }



}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-filter-tabs',
  templateUrl: './filter-tabs.component.html',
  styleUrls: ['./filter-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterTabsComponent implements OnInit {

  // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados.
  documentosLength$=this.documentos.documentosLength$;
  // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados. 'Solo Escritos'!!!
  escritosLength$=this.documentos.documentosEscritosLength$;
  // Recibimos el Observable con los datos del número total de documentos filtrados por término de búsqueda + filtros aplicados. 'Solo Resoluciones'!!!
  resolucionesLength$=this.documentos.documentosResolucionesLength$;

  constructor(private documentos: DocumentosService) { }

  ngOnInit() {
  }

}

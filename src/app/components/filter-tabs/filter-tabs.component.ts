import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-filter-tabs',
  templateUrl: './filter-tabs.component.html',
  styleUrls: ['./filter-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterTabsComponent implements OnInit {

  documentosLength$=this.documentos.documentosLength$;
  escritosLength$=this.documentos.documentosEscritosLength$;
  resolucionesLength$=this.documentos.documentosResolucionesLength$;

  constructor(private documentos: DocumentosService) { }

  ngOnInit() {
  }

}

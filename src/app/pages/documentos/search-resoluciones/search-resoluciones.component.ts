import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-search-resoluciones',
  templateUrl: './search-resoluciones.component.html',
  styleUrls: ['./search-resoluciones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResolucionesComponent {

  // documentos$=this.documentos.documentos$
  documentosR$=this.documentos.documentosResoluciones$




  constructor(private documentos: DocumentosService) {

  }



  // Método para comprobar que los datos del OBservable son efectivamente un array
  isArray(obj) {
    return Array.isArray(obj)
  }
}

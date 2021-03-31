import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-search-escritos',
  templateUrl: './search-escritos.component.html',
  styleUrls: ['./search-escritos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchEscritosComponent {

  // documentos$=this.documentos.documentos$
  documentosE$=this.documentos.documentosEscritos$

  

  

  constructor(private documentos: DocumentosService) { 

  }
  

  // Método para comprobar que los datos del OBservable son efectivamente un array
  isArray(obj) {
    return Array.isArray(obj)
  }

}

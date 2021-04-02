import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { tap } from 'rxjs/operators';
import { CombinacionService } from 'src/app/services/combinacion.service';
// import { DocumentosService } from 'src/app/services/documentos.service';
import { log } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-search-escritos',
  templateUrl: './search-escritos.component.html',
  styleUrls: ['./search-escritos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchEscritosComponent {

  // documentos$=this.documentos.documentos$
  documentosE$=this.combinado.documentosEscritos$
  

  

  

  

  constructor(
    // private documentos: DocumentosService,
    private combinado : CombinacionService
    ) { 

  }
  

  // Método para comprobar que los datos del OBservable son efectivamente un array
  isArray(obj) {
    return Array.isArray(obj)
  }



}

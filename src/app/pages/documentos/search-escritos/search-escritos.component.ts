import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class SearchEscritosComponent implements OnDestroy {

  documentosE$=this.combinado.documentosEscritos$;
  documentosSub:Subscription=this.combinado.combinado$.subscribe()

  
  constructor(
    private combinado : CombinacionService
    ) { 


  }
  

  // Método para comprobar que los datos del OBservable son efectivamente un array
  isArray(obj) {
    return Array.isArray(obj)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.documentosSub.unsubscribe();
  }



}

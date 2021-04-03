import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CombinacionService } from 'src/app/services/combinacion.service';

@Component({
  selector: 'app-search-resoluciones',
  templateUrl: './search-resoluciones.component.html',
  styleUrls: ['./search-resoluciones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResolucionesComponent implements OnDestroy {

  documentosR$=this.combinado.documentosResoluciones$
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

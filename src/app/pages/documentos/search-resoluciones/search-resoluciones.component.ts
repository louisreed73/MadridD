import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DocsResolucionesService } from 'src/app/services/docs-resoluciones.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { log } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-search-resoluciones',
  templateUrl: './search-resoluciones.component.html',
  styleUrls: ['./search-resoluciones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResolucionesComponent implements OnDestroy {

  // Nos subscribimos al Observable de Documentos acumulados de pagination. Para actualizar en esta sección el filtro global del término de búsqueda.
  documentosSub:Subscription=this.documentos.documentos$.subscribe();

  // Recibimos el Observable con los datos del número total de documentos/Tipo resoluciones por término de búsqueda acumulado en pagination.
  docsResoluciones$=this.docsResoluciones.docsResolucionesSource$
  .pipe(
    tap((resoluciones) => {
      log(resoluciones,"El array acumulado es:","lime");

    })
  )


  constructor(
    private documentos : DocumentosService,
    private docsResoluciones : DocsResolucionesService

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

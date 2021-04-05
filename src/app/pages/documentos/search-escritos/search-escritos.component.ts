import { ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DocsEscritosService } from 'src/app/services/docs-escritos.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { log } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-search-escritos',
  templateUrl: './search-escritos.component.html',
  styleUrls: ['./search-escritos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchEscritosComponent implements OnDestroy {

  // Nos subscribimos al Observable de Documentos acumulados de pagination. Para actualizar en esta sección el filtro global del término de búsqueda.
  documentosSub:Subscription=this.documentos.documentos$.subscribe();

  // Recibimos el Observable con los datos del número total de documentos/Tipo escritos por término de búsqueda acumulado en pagination.
  docsEscritos$=this.docsEscritos.docsEscritosSource$
  .pipe(
    tap((escritos) => {
      log(escritos,"El array acumulado es:","lime");

    })
  )

  
  constructor(
    private documentos : DocumentosService,
    private docsEscritos: DocsEscritosService
    ) { 


  }
  

  // Método para comprobar que los datos del Observable son efectivamente un array
  isArray(obj) {
    return Array.isArray(obj)
  }

  ngOnDestroy(): void {
    this.documentosSub.unsubscribe();
  }



}

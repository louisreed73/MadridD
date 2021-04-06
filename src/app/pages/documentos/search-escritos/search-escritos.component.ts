import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy} from '@angular/core';
import { EMPTY, of, Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DocsEscritosService } from 'src/app/services/docs-escritos.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { SpinnerService } from 'src/app/services/spinner.service';
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
  errorObj;
  // Recibimos el Observable con los datos del número total de documentos/Tipo escritos por término de búsqueda acumulado en pagination.
  docsEscritos$=this.docsEscritos.docsEscritosSource$
  .pipe(
    tap((escritos) => {
      log(escritos,"El array acumulado es:","lime");

    }),
    catchError((e: any) => {
      log(e, "esto es un error?", "red")
      this.errorObj=e.name;
      log(this.errorObj, "esto es un error?", "gold")
      // this.spinner.requestSpinner$.next(false);  
      
      setTimeout(() => {
        this._document.defaultView.location.reload();
      }, 2000);     
      return of([])
    })
  )

  docsEscritosLength$=this.docsEscritos.documentosEscritosLength$

  
  constructor(
    private documentos : DocumentosService,
    private docsEscritos: DocsEscritosService,
    private spinner: SpinnerService,

    @Inject(DOCUMENT) private _document: Document

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

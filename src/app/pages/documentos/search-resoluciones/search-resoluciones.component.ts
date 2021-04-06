import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, of, Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DocsResolucionesService } from 'src/app/services/docs-resoluciones.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { SpinnerService } from 'src/app/services/spinner.service';
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
  errorObj;
  // resoluciones_:any;
  // cualquiera:any[]=[]
  // Recibimos el Observable con los datos del número total de documentos/Tipo resoluciones por término de búsqueda acumulado en pagination.
  docsResoluciones$=this.docsResoluciones.docsResolucionesSource$
  .pipe(
    tap((resoluciones) => {
      log(resoluciones,"El array acumulado es:","lime");
      // this.resoluciones_=resoluciones;
    }),
    catchError((e: any) => {
      // log(e, "esto es un error?", "red");
      this.errorObj=e.name;
      log(this.errorObj, "esto es un error?", "gold")
      // this.spinner.requestSpinner$.next(false); 
      setTimeout(() => {
        this._document.defaultView.location.reload();
      }, 2000);        
      return of([])
    })
  )
  docsResolucionesLength$=this.docsResoluciones.documentosResolucionesLength$
  




  constructor(
    private documentos : DocumentosService,
    private docsResoluciones : DocsResolucionesService,
    private spinner: SpinnerService,
    @Inject(DOCUMENT) private _document: Document



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

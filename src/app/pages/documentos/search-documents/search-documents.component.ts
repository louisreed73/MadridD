import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DocumentosService } from 'src/app/services/documentos.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { log } from 'src/app/utilities/utilities';


@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDocumentsComponent {

  inicio: boolean = true;
  errorObj;  
  // Recibimos el Observable con los datos del número total de documentos por término de búsqueda acumulado en pagination.
  documentos$ = this.documentos
    .documentos$
    .pipe(
      tap((v) => {
        log(v,"que es esto:","gold")
        this.inicio = false;
      }),
      catchError((e: any) => {
        // log(e, "esto es un error?", "red")
        this.errorObj=e.name;
        log(this.errorObj, "error en search-documents?", "gold")
        // this.spinner.requestSpinner$.next(false); 
        setTimeout(() => {
          this._document.defaultView.location.reload();
        }, 2000);     
        return of([])
      })
    )
    docsLength$=this.documentos.documentosLength$
    


  constructor(
    private documentos: DocumentosService,
    private spinner: SpinnerService,
    @Inject(DOCUMENT) private _document: Document


    
  ) {



  }


  // Método para comprobar que los datos del OBservable son efectivamente un array
  isArray(obj) {
    return Array.isArray(obj)
  }



}

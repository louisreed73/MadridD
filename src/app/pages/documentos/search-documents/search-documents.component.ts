import { ChangeDetectionStrategy, Component} from '@angular/core';
import { of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DocumentosService } from 'src/app/services/documentos.service';
import { log } from 'src/app/utilities/utilities';


@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDocumentsComponent {

  inicio: boolean = true;

  // Recibimos el Observable con los datos del número total de documentos por término de búsqueda acumulado en pagination.
  documentos$ = this.documentos
    .documentos$
    .pipe(
      tap((v) => {
        this.inicio = false;
      }),
      catchError((e: any) => {
        log(e, "esto es un error?", "red")
        return of(e)
      })
    )



  constructor(
    private documentos: DocumentosService,
  ) {



  }


  // Método para comprobar que los datos del OBservable son efectivamente un array
  isArray(obj) {
    return Array.isArray(obj)
  }



}

// import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
// import { from, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CombinacionService } from 'src/app/services/combinacion.service';
import { DocumentosService } from 'src/app/services/documentos.service';
// import { DocumentosService } from 'src/app/services/documentos.service';
import { log } from 'src/app/utilities/utilities';

// const range=(start,end)=>{
//   return Array.from(Array((end-start) + 1).fill(0),(v,i)=>start+i)
// }

// const url = "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos"


@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDocumentsComponent {

    search;
    formulario;
    pagina;
    numDocs:number;
    inicio:boolean=true;

    // documentos$=new Observable((obs) => {
    //   obs.next([])
    // })
    documentos$=this.combinado
    .combinado$
    .pipe(
      tap((v) => {
        this.inicio=false;
        // log(v, "resultado Fin","lightblue")
        console.log(`%cYa se han terminado los resultados? :${v.length%5===0}`)
      }),
      catchError((e:any)=>{
        log(e,"esto es un error?","red")
        return of(e)
      })
    )

  // documentos$=this.documentos.documentos$;
  // documentosL$=this.documentos.documentosLength$
  // documentosR$=this.documentos.documentosResoluciones$
  

  

  constructor(
    // private documentos: DocumentosService,
    private combinado:CombinacionService,
    // private http:HttpClient
    ) { 
      // this.documentos$
    // .subscribe()
    

  }
  

  // Método para comprobar que los datos del OBservable son efectivamente un array
  isArray(obj) {
    return Array.isArray(obj)
  }

}

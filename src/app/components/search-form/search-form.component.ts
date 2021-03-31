import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {

  Subc: Subscription;
  //form Control del input del string de búsqueda
  searchInput = new FormControl();
  inp:string;

  constructor(private documentos: DocumentosService) { }

  ngOnInit() {
    // Chekeamos los cambios del input de búsqueda, Observable.
    this.Subc=this.searchInput.valueChanges
    .pipe(
      debounceTime(300),
      tap(v=>{
        // debug para verificar el objeto 
        //TODO para quitar el tap completo
        console.log(JSON.stringify(v,null,2)); 
      })
      )
      .subscribe(inp=>{
        // almacenamos el string del input;
        this.inp=inp;
        // Enviamos los datos del string de búsqueda, y dejamos un fake 'host', para posteriormente insertar los filtros que apliquen
        this.documentos.inputAndFiltersData$.next({
          searchInput:this.inp,
          host:this
        })
      });
  }
  ngOnDestroy(): void {
    // Evitamos memory leaks y eliminamos la subscription
    // Sobre todo al volver de la página del documento - PDF
    this.Subc.unsubscribe();
  }

}

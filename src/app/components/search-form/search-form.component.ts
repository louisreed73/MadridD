import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { CombinacionService } from 'src/app/services/combinacion.service';
import { DocumentosService } from 'src/app/services/documentos.service';
import { log} from 'src/app/utilities/utilities';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit, AfterViewInit {

  Subc: Subscription;
  //form Control del input del string de búsqueda
  searchInput = new FormControl();
  inp:string;
  @ViewChild(NgForm,{static:true}) formulario:NgForm
  pagina:number;
  constructor(
    private documentos: DocumentosService,
    private combinacion: CombinacionService
    ) { }

  ngOnInit() {
    // Chekeamos los cambios del input de búsqueda, Observable.
    this.Subc=this.searchInput.valueChanges
    .pipe(
      debounceTime(300),
      tap(v=>{
        // debug para verificar el objeto 
        //TODO para quitar el tap completo
        // console.log(JSON.stringify(v,null,2)); 
      })
      )
      .subscribe(inp=>{
        // almacenamos el string del input;
        this.inp=inp;
        this.pagina=1;
        // Enviamos los datos del string de búsqueda, y dejamos un fake 'host', para posteriormente insertar los filtros que apliquen
        this.documentos.inputAndFiltersData$.next({
          searchInput:this.inp,
          host:this
        })
        this.combinacion.inputSearch$.next(this.inp);
        console.log(this.pagina);
        this.combinacion.pagina$.next(this.pagina);

      });

      
    }
    ngOnDestroy(): void {
      // Evitamos memory leaks y eliminamos la subscription
      // Sobre todo al volver de la página del documento - PDF
      this.Subc.unsubscribe();
    }
    
    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      
      this.combinacion.formularioFiltros$.next(null);
      this.formulario.valueChanges.subscribe((d=>{
        this.pagina=1;

    
        this.combinacion.formularioFiltros$.next(d);
        console.log(this.pagina);
        this.combinacion.pagina$.next(this.pagina);
        // log(d,"Este es el formulario:","lightgreen")
        
        
      }))
      
      
    }
    avanza() {
      ++this.pagina;
      console.log(this.pagina);
      this.combinacion.pagina$.next(this.pagina);
    }

}

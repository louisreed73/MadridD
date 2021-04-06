import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DocumentosService } from 'src/app/services/documentos.service';

const urlWell = "https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos"
const urlWrong = "https://my-json-server2.typicode.com/louisreed73/fakeAPI/documentos"


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit, AfterViewInit {

  Subc: Subscription;
  //form Control del input del string de búsqueda
  searchInput = new FormControl();
  inp: string;
  @ViewChild(NgForm, { static: true }) formulario: NgForm
  @ViewChild("searchInputElem", { static: true }) searchInputElemNative: ElementRef
  pagina: number;
  url:string=urlWell;

  constructor(
    private combinacion: DocumentosService

  ) {
    console.log("Soy el formulario e inputs y me acabo de crear!!!!")
  }

  ngOnInit() {
    this.searchInputElemNative.nativeElement.focus()

    this.Subc = this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
      )
      .subscribe(inputSearch => {


        this.combinacion.stopScroll$.next(true);

        this.combinacion.inputSearch$.next(inputSearch);
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

    this.combinacion.formularioFiltros$.next(null);
    this.formulario.valueChanges.subscribe((d => {
      this.pagina = 1;

      this.combinacion.formularioFiltros$.next(d);
      this.combinacion.pagina$.next(this.pagina);

    }))

    
    
  }
  toggleURL() {
    this.url=this.url===urlWell?urlWrong:urlWell;
    console.log(this.url)
    this.combinacion.url$.next(this.url)
  }


}

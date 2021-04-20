import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit, OnDestroy {
  @Input() filtroscombinado1;
  configFiltro;
  filtroFormGroup: FormGroup;
  indice = [];
  sugerencia: Object;
  filtrosArrayFormsSubs$$:Subscription;

  // Pagination request increment or reset to 1
  pagina: number = 1;
  // filtrosSubsc: Subscription;
  
  constructor(
    private combinacion: DocumentosService,
    private _window: Window

  ) {}

  get keys() {
    return Object.keys(this.filtroFormGroup.controls);
  }

  getValuesFromRadios(ind: number) {
    return this.configFiltro[ind].values;
  }

  dameformGroupArray(i) {
    return (<FormArray>this.filtroFormGroup.get(`arrayData${i}`)).controls;
  }

  dameformGroupControls(key: string) {
    let controls = (<FormGroup>this.filtroFormGroup.get(key)).controls;
    let controlsToArray = [];
    for (let k in controls) {
      controlsToArray.push(controls[k]);
    }
    return controlsToArray;
  }

  dameControlsKeys(item) {
    return Object.keys(item.controls);
  }

  dameTipo(prop) {
    let tipo;
    if (this.filtroFormGroup.get(prop) instanceof FormArray) {
      tipo = 'FormArray';
    }
    if (this.filtroFormGroup.get(prop) instanceof FormGroup) {
      tipo = 'FormGroup';
    }
    if (this.filtroFormGroup.get(prop) instanceof FormControl) {
      tipo = 'FormControl';
    }
    return tipo;
  }

  ngOnInit(): void {
    this.configFiltro = this.filtroscombinado1[0];
    this.filtroFormGroup = this.filtroscombinado1[1];

    this.filtrosArrayFormsSubs$$=this.filtroFormGroup.valueChanges
      .pipe(debounceTime(300))
      .subscribe((data) => {
        console.log(data);
        this.triggerNewSearch(data)
      });

  }

  ngOnDestroy(): void {

    // this.filtrosSubsc.unsubscribe();
    this.filtrosArrayFormsSubs$$.unsubscribe();
        
  }

  anadeForma = (() => {
    

    return (arrayData: string, nombrado: string) => {
     
      if(this.indice.includes(nombrado)) {
        return;
      }
      
      this.indice.push(nombrado);

      (<FormArray>this.filtroFormGroup.get(arrayData)).push(
        new FormGroup({
          [`${nombrado}`]: new FormControl(nombrado),
        })
      );
    };
  })();

  eliminaControl(keyArray, i) {
    let key=Object.keys(<FormArray>this.filtroFormGroup.get(keyArray).value[i])[0];
    let numberIndice=this.indice.indexOf(key);
    this.indice.splice(numberIndice,1);
    (<FormArray>this.filtroFormGroup.get(keyArray)).removeAt(i);
  }



  getSugerencia(e: {[k:string]:any}) {


    this.anadeForma(
      'arrayData'+e.instancia,
      e.selectedTipo
      )
    
  }

  triggerNewSearch(data) {
    console.log(data);
    //  this.pagina = 1;
    this._window.scrollTo(0, 0);
    this.combinacion.stopScroll$.next(true);

    
    this.combinacion.formularioFiltros$.next(data);

    this.combinacion.pagina$.next(this.pagina);
}




}


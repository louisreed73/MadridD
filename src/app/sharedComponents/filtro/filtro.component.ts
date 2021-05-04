import { Component, Inject, Input, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";
// import { filtroDocumentos } from 'src/app/formulariosFiltrado/formulariosFiltrado.data';
import { DocumentosService } from "src/app/services/documentos.service";
import { FiltrosService } from "src/app/services/filtros.service";
import { SearchTriggerService } from "src/app/services/search-trigger.service";

@Component({
     selector: "app-filtro",
     templateUrl: "./filtro.component.html",
     styleUrls: ["./filtro.component.scss"],
})
export class FiltroComponent implements OnInit, OnDestroy {
     @Input() filtroscombinado1;
     @Input() filtroscombinado2;
     configFiltro;
     filtroFormGroup: FormGroup;
     clase: string;
     indice = [];
     sugerencia: Object;
     filtrosArrayFormsSubs: Subscription;

     // Pagination request increment or reset to 1
     pagina: number = 1;
     show$: any;
     // filtrosShowSub: Subscription;

     propiedadesConfigKeys: Array<any>;

     constructor(
          private combinacion: DocumentosService,
          @Inject(Window) private window: Window,
          private filtrosServ: FiltrosService,
          private searchTrigger: SearchTriggerService
     ) {}

     get keys() {
          return Object.keys(this.filtroFormGroup.controls);
     }

     getKeys(v: { [k: string]: any }) {
          return Object.keys(v.controls);
     }

     getValuesFromRadios(ind: number) {
          return this.configFiltro[ind].values;
     }

     dameformGroupArray(i) {
          return (<FormArray>this.filtroFormGroup.get(`arrayData${i}`))
               .controls;
     }

     // dameformGroupControls(key: string) {
     //      console.log(this.configFiltro)
     //      let controls = (<FormGroup>this.filtroFormGroup.get(key)).controls;
     //      let controlsToArray = [];
     //      for (let k in controls) {
     //           controlsToArray.push(controls[k]);
     //      }
     //      return controlsToArray;
     // }

     dameControlsKeys(item) {
          return Object.keys(item.controls);
     }

     dameTipo(prop) {
          let tipo;
          if (this.filtroFormGroup.get(prop) instanceof FormArray) {
               tipo = "FormArray";
          }
          if (this.filtroFormGroup.get(prop) instanceof FormGroup) {
               tipo = "FormGroup";
          }
          if (this.filtroFormGroup.get(prop) instanceof FormControl) {
               tipo = "FormControl";
          }
          return tipo;
     }
     dameTipoReal(formGroup, prop) {
          let tipo;
          if (formGroup.get(prop) instanceof FormArray) {
               tipo = "FormArray";
          }
          if (formGroup.get(prop) instanceof FormGroup) {
               tipo = "FormGroup";
          }
          if (formGroup.get(prop) instanceof FormControl) {
               tipo = "FormControl";
          }
          return tipo;
     }

     ngOnInit(): void {
          // console.log(this.filtros)
          console.log(this.filtroscombinado1);

          this.show$ = this.filtrosServ.showFilters$;
          this.configFiltro = this.filtroscombinado1.data[0];
          this.filtroFormGroup = this.filtroscombinado1.data[1];
          this.clase = this.filtroscombinado1.clase;
          this.propiedadesConfigKeys = Object.keys(
               this.filtroscombinado1.data[0]
          );

          this.filtrosArrayFormsSubs = this.filtroFormGroup.valueChanges
               .pipe(debounceTime(300))
               .subscribe((data) => {
                    // console.log(this.configFiltro);
                    // console.log(data);
                    let transformedData = {};
                    let indice = 0;
                    for (let value of Object.values(data)) {
                         transformedData[
                              this.configFiltro[indice].name
                         ] = value;
                         indice++;
                    }
                    console.log(transformedData);
                    // Sending nueva petición API
                    // this.searchTrigger.updatedFiltro=transformedData;

                    this.triggerNewSearch(transformedData);
               });
     }

     ngOnDestroy(): void {
          // this.filtrosSubsc.unsubscribe();
          this.filtrosArrayFormsSubs.unsubscribe();
     }

     anadeForma = (() => {
          return (arrayData: string, nombrado: string) => {
               if (this.indice.includes(nombrado)) {
                    return;
               }

               this.indice.push(nombrado);

               (<FormArray>this.filtroFormGroup.get(arrayData)).push(
                    new FormGroup({
                         [`${nombrado}`]: new FormControl(true),
                    })
               );
          };
     })();

     eliminaControl(keyArray, i) {
          let key = Object.keys(
               <FormArray>this.filtroFormGroup.get(keyArray).value[i]
          )[0];
          let numberIndice = this.indice.indexOf(key);
          this.indice.splice(numberIndice, 1);
          (<FormArray>this.filtroFormGroup.get(keyArray)).removeAt(i);
     }

     getSugerencia(e: { [k: string]: any }) {
          this.anadeForma("arrayData" + e.instancia, e.selectedTipo);
     }

     triggerNewSearch(data) {
          // console.log(data);
          //  this.pagina = 1;
          // this.window.scrollTo(0, 0);
          this.combinacion.stopScroll$.next(true);

          let actual = this.searchTrigger.updatedFiltro;
          // console.log(actual);
          // let count= actual?.prop1?.id ?? this.count;
          // ++count;

          let updatedChangesFiltro;

          switch (this.filtroscombinado1.clase) {
               case "documentos":
                    {
                         updatedChangesFiltro = {
                              ...actual,
                              documentos: data,
                         };

                         // console.log("Es la clase documentos!!!")
                    }
                    break;
               case "resoluciones":
                    {
                         updatedChangesFiltro = {
                              ...actual,
                              resoluciones: data,
                         };

                         // console.log("Es la clase resoluciones!!!")
                    }
                    break;
               case "escritos":
                    {
                         updatedChangesFiltro = {
                              ...actual,
                              escritos: data,
                         };

                         // console.log("Es la clase escritos!!!")
                    }
                    break;

                    // default: console.log("No tiene clase");
                    break;
          }

          // this.combinacion.formularioFiltros$.next(data);
          // console.log(updatedChangesFiltro);
          // this.combinacion.formularioFiltros$.next(updatedChangesFiltro);

          // this.combinacion.pagina$.next(this.pagina);

          this.searchTrigger.updatedFiltro = updatedChangesFiltro;
          this.searchTrigger.updatedPagina = this.pagina;
     }
}

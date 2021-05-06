import {
     AfterViewInit,
     Component,
     ElementRef,
     Inject,
     Input,
     OnDestroy,
     OnInit,
     QueryList,
     ViewChild,
     ViewChildren,
} from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";
// import { filtroDocumentos } from 'src/app/formulariosFiltrado/formulariosFiltrado.data';
import { DocumentosService } from "src/app/services/documentos.service";
import { FiltrosService } from "src/app/services/filtros.service";
import { SearchTriggerService } from "src/app/services/search-trigger.service";
import { FiltroToggleComponent } from "../filtro-toggle/filtro-toggle.component";

@Component({
     selector: "app-filtro",
     templateUrl: "./filtro.component.html",
     styleUrls: ["./filtro.component.scss"],
})
export class FiltroComponent implements OnInit, OnDestroy, AfterViewInit {
     @Input() filtroscombinado1;
     @ViewChildren(FiltroToggleComponent)
     toggles: QueryList<FiltroToggleComponent>;
     configFiltro;
     filtroFormGroup: FormGroup;
     clase: string;
     indice = [];
     sugerencia: Object;
     filtrosArrayFormsSubs: Subscription;
     triggerCollapseSub: Subscription;
     collapsable: boolean;

     // Pagination request increment or reset to 1
     pagina: number = 1;
     show$: any;
     // filtrosShowSub: Subscription;

     isDirty:boolean;

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

     ngOnInit(): void {
          console.log(this.filtroscombinado1);

          if (this.filtroscombinado1.clase !== "documentos") {
               this.collapsable = false;
               this.triggerCollapseSub = this.filtrosServ.triggerCollapse
                    .pipe()
                    .subscribe((d) => {
                         this.collapsando();
                    });
          } else {
               this.collapsable = true;
          }

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
                    console.log(this.filtroFormGroup);
                    // Sending nueva petición API
                    // this.searchTrigger.updatedFiltro=transformedData;

                    this.triggerNewSearch(transformedData);
               });
     }

     ngOnDestroy(): void {
          // this.filtrosSubsc.unsubscribe();
          this.filtrosArrayFormsSubs.unsubscribe();
          if (!this.collapsable) {

               this.triggerCollapseSub.unsubscribe();
          }
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
          console.log("la llave",(<FormArray>this.filtroFormGroup.get(arrayData)))

               console.log("En el array hay: ",(<FormArray>this.filtroFormGroup.get(arrayData)).length)
          };
     })();



     eliminaControl(keyArray, i) {
          let key = Object.keys(
               <FormArray>this.filtroFormGroup.get(keyArray).value[i]
          )[0];
          console.log("la llave",this.filtroFormGroup.get(keyArray))
          let numberIndice = this.indice.indexOf(key);
          this.indice.splice(numberIndice, 1);
          (<FormArray>this.filtroFormGroup.get(keyArray)).removeAt(i);

          console.log("En el array hay: ",(<FormArray>this.filtroFormGroup.get(keyArray)).length);
          

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

     ngAfterViewInit(): void {
          //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
          //Add 'implements AfterViewInit' to the class.
     }

     collapsando() {
          let someTrue = this.toggles.some(
               (tog) => tog.input.nativeElement.checked
          );

          if (someTrue) {
               this.toggles.forEach((toggle) => {
                    // console.log(toggle.input.nativeElement.parentElement.parentElement.parentElement.firstChild)
                    // console.log(toggle.input.nativeElement);

                    // toggle.input.nativeElement.checked=false;

                    toggle.input.nativeElement.checked = false;
                    // toggle.input.nativeElement.parentElement.parentElement.previousElementSibling.classList.remove("collapsed");
               });
          } else {
               this.toggles.forEach((toggle) => {
                    // console.log(toggle.input.nativeElement);

                    // toggle.input.nativeElement.checked=false;

                    toggle.input.nativeElement.checked = true;
               });
          }

          if (this.collapsable) {
               this.filtrosServ.triggerCollapse.next(true);
          }

     }
     whatIs(obj) {
          console.log(`%cQue es esto: ${JSON.stringify(Object.values(obj).some(val=>val!==""))}`,"color:lime");
          console.log(Object.values(this.filtroFormGroup.controls[obj].value).some(val=>!!val));
          return Object.values(this.filtroFormGroup.controls[obj].value).some(val=>!!val);
          // return Object.values(obj).some(val=>val!=="");
     }
}

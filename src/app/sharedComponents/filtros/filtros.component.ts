import { Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { Formulario } from "src/app/interfaces/formulario";
import { DocumentosService } from "src/app/services/documentos.service";
import { FormulariosService } from "src/app/services/formularios-data.service";

@Component({
     selector: "app-filtros",
     templateUrl: "./filtros.component.html",
     styleUrls: ["./filtros.component.scss"],
})
export class FiltrosComponent implements OnInit, OnDestroy {
     @Input() srcData: string;
     formFilters: FormArray = new FormArray([]);
     arrayForm: Array<Formulario>;
     // Pagination request increment or reset to 1
     pagina: number = 1;
     filtrosSubsc: Subscription;
     constructor(
          private fb: FormBuilder,
          private Formularios_Service: FormulariosService,
          private combinacion: DocumentosService,
          private _window: Window
     ) {}

     ngOnInit(): void {
          // console.log(this.arrayForm);
          this.arrayForm = this.Formularios_Service.getFormulario(this.srcData);
          console.log(this.arrayForm);

          this.arrayForm.forEach((formGroup, i) => {
               let formGroup_part = {};

               if (formGroup.multi && formGroup.type === "checkB-radio") {
                    formGroup.formGroup_controls.forEach((formControN, _i) => {
                         formGroup_part[
                              `${formControN.formControl_Name}_${i}${_i}`
                         ] = new FormControl("");
                    });
               }
               if (!formGroup.multi && formGroup.type === "checkB-radio") {
                    formGroup.formGroup_controls.forEach((formControN, _i) => {
                         formGroup_part[
                              `${formControN.formControl_Name}`
                         ] = new FormControl("");
                    });
               }
               if (formGroup.type === "date") {
                    formGroup.formGroup_controls.forEach((formControN, _i) => {
                         formGroup_part[
                              `${formControN.formControl_Name}_${i}${_i}`
                         ] = new FormControl("");
                    });
               }

               console.log(formGroup_part);

               let formGroup_new = new FormGroup(formGroup_part);

               this.formFilters.push(formGroup_new);
               console.log(this.formFilters.controls);
          });


          // this.combinacion.formularioFiltros$.next(null);
          this.filtrosSubsc = this.formFilters.valueChanges.subscribe((d) => {
               
               this.triggerNewSearch(d);
          });
     }

     ngOnDestroy(): void {
          this.filtrosSubsc.unsubscribe();
     }

     triggerNewSearch(data) {
          console.log(data);
          //  this.pagina = 1;
          this._window.scrollTo(0, 0);
          this.combinacion.stopScroll$.next(true);

          data.forEach((d) => {
               if (Object.keys(data).length > 1) {
                    console.log(
                         `%c es multi: ${JSON.stringify(data)}`,
                         "color:lime"
                    );
               }
               console.log(
                    `%c es multi: ${JSON.stringify(data)}`,
                    "color:purple"
               );
          });


          this.combinacion.formularioFiltros$.next(data);

          this.combinacion.pagina$.next(this.pagina);
     }
}

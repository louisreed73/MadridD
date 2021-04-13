import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { DocumentosService } from "src/app/services/documentos.service";
import { FormulariosService } from "src/app/services/formularios-data.service";

@Component({
     selector: "app-filtros",
     templateUrl: "./filtros.component.html",
     styleUrls: ["./filtros.component.scss"],
})
export class FiltrosComponent implements OnInit, OnDestroy {
     formFilters: FormArray = new FormArray([]);
     arrayForm = this.Formularios_Service.getFormulario(1);
     // Pagination request increment or reset to 1
     pagina: number;
     filtrosSubsc: Subscription;
     constructor(
          private fb: FormBuilder,
          private Formularios_Service: FormulariosService,
          private combinacion: DocumentosService
     ) {}

     ngOnInit(): void {
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

          // this.combinacion.formularioFiltros$.next();

          this.filtrosSubsc = this.formFilters.valueChanges.subscribe((d) => {
               console.log(d);
              //  this.pagina = 1;

              //  // Send first null data to get something in load
              //  this.combinacion.formularioFiltros$.next(d);
              //  // Sending page 1 - always when changed input or selections
              //  // Scroll is unique responsible for increment pagination
              //  this.combinacion.pagina$.next(this.pagina);
          });
     }

     ngOnDestroy(): void {
          this.filtrosSubsc.unsubscribe();
     }
}

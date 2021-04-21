import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { combineLatest, forkJoin, merge, of } from "rxjs";
import { map, mergeMap, switchMap, tap } from "rxjs/operators";
import {
     config1,
     config2,
     config3,
     form1,
     form2,
     form3,
     filtro,
     config,
} from "../formulariosFiltrado/formulariosFiltrado.data";
import { PruebaAPIService } from "./prueba-api.service";

@Injectable({
     providedIn: "root",
})
export class FiltrosService {
     datosDynamicValues: Array<Array<string>>;
     //  filtrosDocumentos=of()

     constructor(private api: PruebaAPIService, private http: HttpClient) {
          this.getRequestValoresFormularios();
          console.log(config2);
     }

     getRequestValoresFormularios() {
          combineLatest(
               this.http.get<any>("/api/documentos"),
               this.http.get<any>("/api/documentos2")
          )
               .pipe(
                    mergeMap(([documentos, documentos2]) => {
                         let _documentos = documentos.data.tiposDocumentales.map(
                              (it) => it.descripcion
                         );
                         let _documentos2 = documentos2.data.tiposDocumentales.map(
                              (it) => it.descripcion
                         );
                         // documentos.tiposDocumentales.map(it=>it.descripcion)
                         return of([_documentos, _documentos2]);
                    }),

                    tap((d) => {
                          console.log(d);
                    })
               )
               .subscribe((data) => {
                    this.datosDynamicValues = data;
                    this.creaConfig(
                         data,
                         filtro.documentos2,
                         config1,
                         config.procedimiento2
                    );
                    this.creaConfig(
                         data,
                         filtro.documentos2,
                         config1,
                         config.procedimiento
                    );
                    console.log(this.datosDynamicValues);
               });
     }

     creaConfig(reqVal, reqValNumb, configVar, configNumb) {
          let datosReq = [];
          reqVal[reqValNumb].forEach((item) => {
               datosReq.push(item);
          });
          console.log(datosReq)
          console.log(configVar[configNumb])

          
          configVar[configNumb].values = datosReq;
          console.log(config1)

          // console.log(configVar[configNumb])
     }

     getFiltrosDocumentos() {
          return of([config1, form1]);
     }
     getFiltrosEscritos() {
       
          return of([config2, form2]);
     }
     getFiltrosResoluciones() {
          return of([config3, form3]);
     }
}

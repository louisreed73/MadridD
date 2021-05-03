import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, combineLatest, from, of, Subscription } from "rxjs";
import { shareReplay, switchMap, toArray } from "rxjs/operators";
import { environment } from "src/environments/environment";
import {
     config1,
     config2,
     config3,
     form1,
     form2,
     form3,
} from "../formulariosFiltrado/formulariosFiltrado.data";

@Injectable({
     providedIn: "root",
})
export class FiltrosService implements OnDestroy {
     datosDynamicValues: Array<Array<string>>;
     reqValoresDocumentosSub: Subscription;
     reqValoresResolucionesSub: Subscription;
     reqValoresEscritosSub: Subscription;
     showFilters$: BehaviorSubject<boolean> = new BehaviorSubject(false);

     constructor(
          private http: HttpClient
          ) {
          this.getRequestValoresDocumentos();
          this.getRequestValoresResoluciones();
          this.getRequestValoresEscritos();
     }

     ngOnDestroy(): void {
          this.reqValoresDocumentosSub.unsubscribe();
          this.reqValoresResolucionesSub.unsubscribe();
          this.reqValoresEscritosSub.unsubscribe();
     }

     getRequestValoresDocumentos() {
          this.reqValoresDocumentosSub = combineLatest([
               this.http.get<any>(
                    `${environment.baseURLApi}/tipos-documentales`
               ),
               this.http.get<any>(`${environment.baseURLApi}/fases-procesales`),
               this.http.get<any>(
                    `${environment.baseURLApi}/tipos-procedimientos`
               ),
               this.http.post<any>(`${environment.baseURLApi}/magistrados`, {}),
          ])
               .pipe(
                    switchMap((data) => {
                         return data.map((itemData, ind) => {
                              return itemData.data[
                                   Object.keys(data[ind].data)[0]
                              ].map((it) => it.descripcion);
                         });
                    }),
                    toArray(),
                    shareReplay(1)
               )
               .subscribe((data) => {
                    data.forEach((filtro, index) => {
                         this.creaConfig(data, index, config1);
                    });
                    // this.showFilters$.next(true);
               });
     }
     getRequestValoresResoluciones() {
          this.reqValoresResolucionesSub = combineLatest([
               this.http.get<any>(`${environment.baseURLApi}/tipos-resolucion`),
               // from([]),
               from([
                    {
                         data: {
                              cualquiera: [
                                   { codigo: "SENT", descripcion: "Sentencia" },
                                   { codigo: "AUTO", descripcion: "Auto" },
                              ],
                         },
                    },
               ]),
               from([
                    {
                         data: {
                              cualquiera: [
                                   { codigo: "SENT", descripcion: "Tipo 1" },
                                   { codigo: "AUTO", descripcion: "Tipo 2" },
                              ],
                         },
                    },
               ]),
               from([
                    {
                         data: {
                              cualquiera: [
                                   { codigo: "SENT", descripcion: "Option 1" },
                                   { codigo: "AUTO", descripcion: "Option 2" },
                              ],
                         },
                    },
               ]),
               // from([]),
               // from([
               //      {
               //           data: {
               //                cualquiera: [
               //                     { codigo: "SENT", descripcion: "Sentencia" },
               //                     { codigo: "AUTO", descripcion: "Auto" },
               //                ],
               //           },
               //      },
               // ]),
          ])
               .pipe(
                    switchMap((data) => {
                         return data.map((itemData, ind) => {
                              console.log(itemData);
                              return itemData.data[
                                   Object.keys(data[ind].data)[0]
                              ].map((it) => it.descripcion);
                         });
                    }),
                    toArray(),
                    shareReplay(1)
               )
               .subscribe((data) => {
                    data.forEach((filtro, index) => {
                         this.creaConfig(data, index, config2);
                    });
                    // this.showFilters$.next(true);
               });
     }
     getRequestValoresEscritos() {
          this.reqValoresResolucionesSub = combineLatest([
               this.http.get<any>(`${environment.baseURLApi}/tipos-escritos`),
          ])
               .pipe(
                    switchMap((data) => {
                         return data.map((itemData, ind) => {
                              return itemData.data[
                                   Object.keys(data[ind].data)[0]
                              ].map((it) => it.descripcion);
                         });
                    }),
                    toArray(),
                    shareReplay(1)
               )
               .subscribe((data) => {
                    data.forEach((filtro, index) => {
                         this.creaConfig(data, index, config3);
                    });
                    this.showFilters$.next(true);
               });
     }

     creaConfig(reqVal, reqValNumb, configVar) {
          let datosReq = [];
          reqVal[reqValNumb].forEach((item) => {
               datosReq.push(item);
          });
          configVar[reqValNumb].values = datosReq;
     }

     getFiltrosDocumentos() {
          return of([config1, form1]);
     }
     getFiltrosResoluciones() {
          return of([config2, form2]);
     }
     getFiltrosEscritos() {
          return of([config3, form3]);
     }
}

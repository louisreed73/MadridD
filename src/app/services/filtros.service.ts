import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import {
     BehaviorSubject,
     combineLatest,
     from,
     of,
     Subject,
     Subscription,
} from "rxjs";
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
     // datosDynamicValues: Array<Array<string>>;
     reqValoresDocumentosSub: Subscription;
     reqValoresResolucionesSub: Subscription;
     reqValoresEscritosSub: Subscription;
     showFilters$: BehaviorSubject<boolean> = new BehaviorSubject(false);
     triggerCollapse: Subject<any> = new Subject();

     constructor(private http: HttpClient) {
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
               from([
                    {
                         data: {
                              cualquiera: [
                                   { codigo: null, descripcion: "desde" },
                                   { codigo: null, descripcion: "hasta" },
                                   // { codigo: "AUTOS", descripcion: "Input 3" },
                              ],
                         },
                    },
               ]),
               // this.http.get<any>(`${environment.baseURLApi}/fases-procesales`),
               this.http.get<any>(
                    `${environment.baseURLApi}/tipos-procedimientos`
               ),
               from([
                    {
                         data: {
                              cualquiera: [
                                   { codigo: null, descripcion: "numero" },
                                   { codigo: null, descripcion: "año" },
                                   // { codigo: "AUTOS", descripcion: "Input 3" },
                              ],
                         },
                    },
               ]),
               this.http.post<any>(`${environment.baseURLApi}/magistrados`, {}),
          ])
               .pipe(
                    switchMap((data) => {
                         return data.map((itemData, ind) => {
                              return itemData.data[
                                   Object.keys(data[ind].data)[0]
                              ].map((it) => it.descripcion.toLowerCase());
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
               // this.http.get<any>(`${environment.baseURLApi}/tipos-resolucion`),
               // from([]),
               from([
                    {
                         data: {
                              cualquiera: [
                                   { codigo: null, descripcion: "auto" },
                                   { codigo: null, descripcion: "sentencia" },
                                   // { codigo: "AUTOS", descripcion: "Input 3" },
                              ],
                         },
                    },
               ]),
               from([
                    {
                         data: {
                              cualquiera: [
                                   { codigo: null, descripcion: "desde" },
                                   { codigo: null, descripcion: "hasta" },
                                   // { codigo: "AUTOS", descripcion: "Input 3" },
                              ],
                         },
                    },
               ]),
               // from([
               //      {
               //           data: {
               //                cualquiera: [
               //                     { codigo: null, descripcion: "sentencia" },
               //                     { codigo: null, descripcion: "auto" },
               //                ],
               //           },
               //      },
               // ]),
               // from([
               //      {
               //           data: {
               //                cualquiera: [
               //                     { codigo: "SENT", descripcion: "Tipo 1" },
               //                     { codigo: "AUTO", descripcion: "Tipo 2" },
               //                ],
               //           },
               //      },
               // ]),
               // from([
               //      {
               //           data: {
               //                cualquiera: [
               //                     { codigo: "SENT", descripcion: "Option 1" },
               //                     { codigo: "AUTO", descripcion: "Option 2" },
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
                              ].map((it) => it.descripcion.toLowerCase());
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
               from([
                    {
                         data: {
                              cualquiera: [
                                   { codigo: null, descripcion: "desde" },
                                   { codigo: null, descripcion: "hasta" },
                                   // { codigo: "AUTOS", descripcion: "Input 3" },
                              ],
                         },
                    },
               ]),
          ])
               .pipe(
                    switchMap((data) => {
                         return data.map((itemData, ind) => {
                              return itemData.data[
                                   Object.keys(data[ind].data)[0]
                              ].map((it) => it.descripcion.toLowerCase());
                         });
                    }),
                    toArray(),
                    shareReplay(1)
               )
               .subscribe((data) => {
                    data.forEach((filtro, index) => {
                         this.creaConfig(data, index, config3);
                    });
                    setTimeout((params) => {
                         
                         this.showFilters$.next(true);
                    },0)
               });
     }

     creaConfig(reqVal, reqValNumb, configVar) {
          let datosReq = [];
          reqVal[reqValNumb].forEach((item) => {
               console.log(item)
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

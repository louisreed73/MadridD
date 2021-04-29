import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
// import { FormArray, FormControl, FormGroup } from "@angular/forms";
import {
     BehaviorSubject,
     combineLatest,
     forkJoin,
     merge,
     of,
     Subscription,
} from "rxjs";
import { mergeMap, shareReplay, switchMap, tap, toArray } from "rxjs/operators";
import { environment } from "src/environments/environment";
import {
     config1,
     config2,
     config3,
     form1,
     form2,
     form3,
} from "../formulariosFiltrado/formulariosFiltrado.data";
// import { PruebaAPIService } from "./prueba-api.service";

@Injectable({
     providedIn: "root",
})
export class FiltrosService implements OnDestroy {
     datosDynamicValues: Array<Array<string>>;
     reqValoresDocumentosSub: Subscription;
     reqValoresResolucionesSub: Subscription;
     reqValoresEscritosSub: Subscription;
     //  filtrosDocumentos=of()
     showFilters$: BehaviorSubject<boolean> = new BehaviorSubject(false);

     constructor(private http: HttpClient) {
          this.getRequestValoresDocumentos();
          this.getRequestValoresResoluciones();
          this.getRequestValoresEscritos();
          // console.log(config2);
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
                    switchMap(
                         (data) => {
                              return data.map((itemData, ind) => {
                                   console.log(Object.keys(data[ind].data)[0]);
                                   console.log(
                                        itemData.data[
                                             Object.keys(data[ind].data)[0]
                                        ]
                                   );
                                   return itemData.data[
                                        Object.keys(data[ind].data)[0]
                                   ].map((it) => it.descripcion);
                              });
                         }
                         // ([
                         //      tipos_documentales,
                         //      fases_procesales,
                         //      tipos_procedimientos,
                         //      magistrados,
                         // ]) => {
                         //      let _tipos_documentales = tipos_documentales.data[
                         //           Object.keys(tipos_documentales.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      let _fases_procesales = fases_procesales.data[
                         //           Object.keys(fases_procesales.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      let _tipos_procedimientos = tipos_procedimientos.data[
                         //           Object.keys(tipos_procedimientos.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      let _magistrados = magistrados.data[
                         //           Object.keys(magistrados.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      console.log(_magistrados);
                         //      // documentos.tiposDocumentales.map(it=>it.descripcion)
                         //      return of([
                         //           _tipos_documentales,
                         //           _fases_procesales,
                         //           _tipos_procedimientos,
                         //           _magistrados,
                         //      ]);
                         // }
                    ),
                    toArray(),

                    tap((d) => {
                         // console.log(d);
                    }),
                    shareReplay(1)
               )
               .subscribe((data) => {
                    // this.datosDynamicValues = data;

                    data.forEach((filtro, index) => {
                         this.creaConfig(data, index, config1, index);
                    });
                    // this.creaConfig(
                    //      data,
                    //      filtroDocumentos.tipos_documentales,
                    //      config1,
                    //      filtroDocumentos.tipos_documentales
                    // );
                    // this.creaConfig(
                    //      data,
                    //      filtroDocumentos.fases_procesales,
                    //      config1,
                    //      filtroDocumentos.fases_procesales
                    // );
                    // this.creaConfig(
                    //      data,
                    //      filtroDocumentos.tipos_procedimientos,
                    //      config1,
                    //      filtroDocumentos.tipos_procedimientos
                    // );
                    // this.creaConfig(
                    //      data,
                    //      filtroDocumentos.magistrados,
                    //      config1,
                    //      filtroDocumentos.magistrados
                    // );
                    // console.log(this.datosDynamicValues);
                    this.showFilters$.next(true);
               });
     }
     getRequestValoresResoluciones() {
          this.reqValoresResolucionesSub = combineLatest([
               this.http.get<any>(`${environment.baseURLApi}/tipos-resolucion`),
               // this.http.get<any>(`${environment.baseURLApi}/fases-procesales`),
               // this.http.get<any>(
               //      `${environment.baseURLApi}/tipos-procedimientos`
               // ),
               // this.http.post<any>(`${environment.baseURLApi}/magistrados`, {}),
          ])
               .pipe(
                    switchMap(
                         (data) => {
                              return data.map((itemData, ind) => {
                                   console.log(Object.keys(data[ind].data)[0]);
                                   console.log(
                                        itemData.data[
                                             Object.keys(data[ind].data)[0]
                                        ]
                                   );
                                   return itemData.data[
                                        Object.keys(data[ind].data)[0]
                                   ].map((it) => it.descripcion);
                              });
                         }
                         // ([
                         //      tipos_documentales,
                         //      fases_procesales,
                         //      tipos_procedimientos,
                         //      magistrados,
                         // ]) => {
                         //      let _tipos_documentales = tipos_documentales.data[
                         //           Object.keys(tipos_documentales.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      let _fases_procesales = fases_procesales.data[
                         //           Object.keys(fases_procesales.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      let _tipos_procedimientos = tipos_procedimientos.data[
                         //           Object.keys(tipos_procedimientos.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      let _magistrados = magistrados.data[
                         //           Object.keys(magistrados.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      console.log(_magistrados);
                         //      // documentos.tiposDocumentales.map(it=>it.descripcion)
                         //      return of([
                         //           _tipos_documentales,
                         //           _fases_procesales,
                         //           _tipos_procedimientos,
                         //           _magistrados,
                         //      ]);
                         // }
                    ),
                    toArray(),

                    tap((d) => {
                         // console.log(d);
                    }),
                    shareReplay(1)
               )
               .subscribe((data) => {
                    // this.datosDynamicValues = data;

                    data.forEach((filtro, index) => {
                         this.creaConfig(data, index, config2, index);
                    });

                    // this.creaConfig(
                    //      data,
                    //      filtroResoluciones.tipos_documentales,
                    //      config2,
                    //      filtroResoluciones.tipos_documentales
                    // );
                    // this.creaConfig(
                    //      data,
                    //      filtroResoluciones.fases_procesales,
                    //      config2,
                    //      filtroResoluciones.fases_procesales
                    // );
                    // this.creaConfig(
                    //      data,
                    //      filtroResoluciones.tipos_procedimientos,
                    //      config2,
                    //      filtroResoluciones.tipos_procedimientos
                    // );
                    // this.creaConfig(
                    //      data,
                    //      filtroResoluciones.magistrados,
                    //      config2,
                    //      filtroResoluciones.magistrados
                    // );
                    // console.log(this.datosDynamicValues);
                    this.showFilters$.next(true);
               });
     }
     getRequestValoresEscritos() {
          this.reqValoresResolucionesSub = combineLatest([
               this.http.get<any>(`${environment.baseURLApi}/tipos-escritos`),
               // this.http.get<any>(`${environment.baseURLApi}/fases-procesales`),
               // this.http.get<any>(
               //      `${environment.baseURLApi}/tipos-procedimientos`
               // ),
               // this.http.post<any>(`${environment.baseURLApi}/magistrados`, {}),
          ])
               .pipe(
                    switchMap(
                         (data) => {
                              return data.map((itemData, ind) => {
                                   console.log(Object.keys(data[ind].data)[0]);
                                   console.log(
                                        itemData.data[
                                             Object.keys(data[ind].data)[0]
                                        ]
                                   );
                                   return itemData.data[
                                        Object.keys(data[ind].data)[0]
                                   ].map((it) => it.descripcion);
                              });
                         }

                         // ([
                         //      tipos_documentales,
                         //      fases_procesales,
                         //      tipos_procedimientos,
                         //      magistrados,
                         // ]) => {
                         //      let _tipos_documentales = tipos_documentales.data[
                         //           Object.keys(tipos_documentales.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      let _fases_procesales = fases_procesales.data[
                         //           Object.keys(fases_procesales.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      let _tipos_procedimientos = tipos_procedimientos.data[
                         //           Object.keys(tipos_procedimientos.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      let _magistrados = magistrados.data[
                         //           Object.keys(magistrados.data)[0]
                         //      ].map((it) => it.descripcion);
                         //      console.log(_magistrados);
                         //      // documentos.tiposDocumentales.map(it=>it.descripcion)
                         //      return of([
                         //           _tipos_documentales,
                         //           _fases_procesales,
                         //           _tipos_procedimientos,
                         //           _magistrados,
                         //      ]);
                         // }
                    ),
                    toArray(),

                    tap((d) => {
                         // console.log(d);
                    }),
                    shareReplay(1)
               )
               .subscribe((data) => {
                    // this.datosDynamicValues = data;

                    data.forEach((filtro, index) => {
                         this.creaConfig(data, index, config3, index);
                    });

                    // this.creaConfig(
                    //      data,
                    //      filtroEscritos.tipos_documentales,
                    //      config3,
                    //      filtroEscritos.tipos_documentales
                    // );
                    // this.creaConfig(
                    //      data,
                    //      filtroEscritos.fases_procesales,
                    //      config3,
                    //      filtroEscritos.fases_procesales
                    // );
                    // this.creaConfig(
                    //      data,
                    //      filtroEscritos.tipos_procedimientos,
                    //      config3,
                    //      filtroEscritos.tipos_procedimientos
                    // );
                    // this.creaConfig(
                    //      data,
                    //      filtroEscritos.magistrados,
                    //      config3,
                    //      filtroEscritos.magistrados
                    // );
                    // console.log(this.datosDynamicValues);
                    this.showFilters$.next(true);
               });
     }

     creaConfig(reqVal, reqValNumb, configVar, configNumb) {
          let datosReq = [];
          reqVal[reqValNumb].forEach((item) => {
               datosReq.push(item);
          });
          // console.log(datosReq);
          console.log(configVar[configNumb]);

          configVar[configNumb].values = datosReq;
          // console.log(config1);

          // console.log(configVar[configNumb])
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

import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import {
     BehaviorSubject,
     combineLatest,
     from,
     of,
     Subject,
     Subscription,
} from "rxjs";
import { shareReplay, switchMap, tap, toArray } from "rxjs/operators";
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

     resolucionesBuiltTrigger: Subject<FormGroup> = new Subject();
     resolucionesFormBuilt: FormGroup = new FormGroup({});

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
                                   { codigo: "SENT", descripcion: "Input 1" },
                                   { codigo: "AUTO", descripcion: "Input 2 /" },
                                   { codigo: "AUTOS", descripcion: "Input 3" },
                              ],
                         },
                    },
               ]),
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

                    this.creaForm(config2, this.resolucionesFormBuilt);
                    console.log(
                         `%cConstruido el Form Group a partir de config1: ${Object.keys(
                              this.resolucionesFormBuilt.value
                         )}`,
                         `color:gold`
                    );
                    this.resolucionesBuiltTrigger.next(
                         this.resolucionesFormBuilt
                    );

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
                    // this.showFilters$.next(true);
               });
     }

     creaConfig(reqVal, reqValNumb, configVar) {
          let datosReq = [];
          reqVal[reqValNumb].forEach((item) => {
               datosReq.push(item);
          });
          configVar[reqValNumb].values = datosReq;
     }

     creaForm(config, formTarget) {
          console.log(config);
          let count = 0;
          config.forEach((conf) => {
               // console.log(conf.tipo,conf.name)

               if (conf.tipo === "array") {
                    console.log(`Esta es de tipo array!!!`);
                    console.log(conf.name);
                    formTarget.addControl(
                         `${conf.name}${count++}`,
                         new FormArray([])
                    );
               }
               if (conf.tipo === "date") {
                    console.log(`Esta es de tipo date!!!`);
                    console.log(conf.name);
                    formTarget.addControl(`${conf.name}`, new FormGroup({}));
                    count++;
                    for (let val of conf.values) {
                         formTarget.controls[conf.name].addControl(
                              val,
                              new FormControl("")
                         );
                    }
               }
               if (conf.tipo === "checkbox") {
                    if (conf.multi) {
                         console.log(`Esta es multi true!!!`);

                         console.log(conf.name);
                         formTarget.addControl(
                              `${conf.name}`,
                              new FormGroup({})
                         );
                         count++;
                         for (let val of conf.values) {
                              formTarget.controls[conf.name].addControl(
                                   val,
                                   new FormControl("")
                              );
                         }
                    } else {
                         console.log(`Esta es multi false!!!`);

                         console.log(conf.name);

                         formTarget.addControl(
                              `${conf.name}`,
                              new FormGroup({})
                         );
                         count++;

                         formTarget.controls[conf.name].addControl(
                              "Opcion",
                              new FormControl("")
                         );
                    }
               }
          });

          console.log(formTarget);
          console.log(formTarget);
     }

     getFiltrosDocumentos() {
          return of([config1, form1]);
     }
     getFiltrosResoluciones() {
          return of([config2, form2]);
     }
     getFiltrosResoluciones2() {
          return combineLatest([
               of(config2),
               this.resolucionesBuiltTrigger,
          ]).pipe(
               tap((d) => {
                    console.log(
                         `%cRecibido el Form Group a partir de config1: ${this.resolucionesFormBuilt}`,
                         `color:lime`
                    );
               }),
               // toArray()
          );
     }
     getFiltrosEscritos() {
          return of([config3, form3]);
     }
}

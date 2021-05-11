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

     documentosCache: any[];

     constructor(private http: HttpClient) {
          this.getRequestValoresDocumentos();
     }

     ngOnDestroy(): void {
          this.reqValoresDocumentosSub.unsubscribe();
          // this.reqValoresResolucionesSub.unsubscribe();
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
               this.http.get<any>(`${environment.baseURLApi}/tipos-escritos`),
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
                    data.slice(0,(data.length - 1)).forEach((filtro, index) => {
                         this.creaConfig(data, index, config1);
                    });

                    // let dataRes=[...data]
                    data.push(
                         // ["auto","sentencia"],
                         ["desde", "hasta"]
                    );
                    
                    data.forEach((filtro, index) => {
                         this.creaConfig(data, index, config3);
                    });
                    let dataRes = data.slice(0, data.length - 2);
                    // console.log(dataEs);
                    dataRes.push(
                         ["auto","sentencia"],
                         ["desde", "hasta"]
                    );

                    dataRes.forEach((filtro, index) => {
                         this.creaConfig(dataRes, index, config2);
                    });

                    this.showFilters$.next(true);
               });
     }


     creaConfig(reqVal, reqValNumb, configVar) {
          let datosReq = [];
          reqVal[reqValNumb].forEach((item) => {
               console.log(item);
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

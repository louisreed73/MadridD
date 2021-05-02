let getRequestValoresResoluciones$=
          combineLatest([
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
                              // console.log(itemData);
                              return itemData.data[
                                   Object.keys(data[ind].data)[0]
                              ].map((it) => it.descripcion);
                         });
                    }),
                    toArray(),
                    map(data=>{
                        
                              data.forEach((filtro, index) => {
                                   this.creaConfig(data, index, config2);
                              });
                              this.creaForm(config2, this.formFiltroResoluciones);
                              this.showFilters$.next(true);
                  
                         console.log(config2,this.formFiltroResoluciones)
                         return [config2,this.formFiltroResoluciones]
                         
                    }),
                    // toArray(),
                    tap(console.log),

                    // shareReplay(1)
               )
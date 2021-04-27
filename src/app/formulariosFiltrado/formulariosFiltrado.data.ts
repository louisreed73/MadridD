import { FormArray, FormControl, FormGroup } from "@angular/forms";

let config1 = [
     {
          tipo: "array",
          name: "tipo documento",
          // values: [
          //      "Acta",
          //      "Acta conciliación",
          //      "Acuerdo",
          //      "Acuse de recibo",
          //      "Auto",
          // ],
     },
     {
          tipo: "array",
          name: "fase procesal",
          // values: [
          //      "Acta B",
          //      "Acta conciliación B",
          //      "Acuerdo B",
          //      "Acuse de recibo B",
          //      "Auto B",
          // ],
     },
     {
          tipo: "array",
          name: "tipo procedimiento",
          // values: [
          //      "Tramite AB",
          //      "Tramite conciliación B",
          //      "Tramite B",
          //      "Tramite de recibo B",
          //      "Tramite C",
          // ],
     },
     {
          tipo: "array",
          name: "magistrado",
          // values: [
          //      "Tramite AB",
          //      "Tramite conciliación B",
          //      "Tramite B",
          //      "Tramite de recibo B",
          //      "Tramite C",
          // ],
     },

];

let form1: FormGroup = new FormGroup({
     [`arrayData0`]: new FormArray([]),

     [`arrayData1`]: new FormArray([]),

     [`arrayData2`]: new FormArray([]),

     [`arrayData3`]: new FormArray([]),

     // magistrado: new FormGroup({
     //      from: new FormControl(""),
     //      until: new FormControl(""),
     //      another: new FormControl(""),
     // }),
});

/**
 *
 * Block comment
 *
 */

let config2 = [
     {
          tipo: "array",
          name: "tipo documento",
          // values: [
          //      "Acta",
          //      "Acta conciliación",
          //      "Acuerdo",
          //      "Acuse de recibo",
          //      "Auto",
          // ],
     },
     {
          tipo: "array",
          name: "fase procesal",
          // values: [
          //      "Acta B",
          //      "Acta conciliación B",
          //      "Acuerdo B",
          //      "Acuse de recibo B",
          //      "Auto B",
          // ],
     },
     {
          tipo: "array",
          name: "tipo procedimiento",
          // values: [
          //      "Tramite AB",
          //      "Tramite conciliación B",
          //      "Tramite B",
          //      "Tramite de recibo B",
          //      "Tramite C",
          // ],
     },
     {
          tipo: "array",
          name: "magistrado",
          // values: [
          //      "Tramite AB",
          //      "Tramite conciliación B",
          //      "Tramite B",
          //      "Tramite de recibo B",
          //      "Tramite C",
          // ],
     },
];
let form2: FormGroup = new FormGroup({
     [`arrayData0`]: new FormArray([]),

     [`arrayData1`]: new FormArray([]),

     [`arrayData2`]: new FormArray([]),

     [`arrayData3`]: new FormArray([]),
     // procesal: new FormGroup({
     //      procesal: new FormControl(""),
     // }),
     // [`arrayData1`]: new FormArray([]),
     // magistrado: new FormGroup({
     //      from: new FormControl(""),
     //      until: new FormControl(""),
     //      another: new FormControl(""),
     // }),
     // resolucion: new FormGroup({
     //      ["Acta vale"]: new FormControl(""),
     //      ["Acta conciliación"]: new FormControl(""),
     //      ["Acuerdo"]: new FormControl(""),
     // }),
     // [`arrayData4`]: new FormArray([]),
});

let config3 = [
     {
          tipo: "array",
          name: "tipo documento",
          // values: [
          //      "Acta",
          //      "Acta conciliación",
          //      "Acuerdo",
          //      "Acuse de recibo",
          //      "Auto",
          // ],
     },
     {
          tipo: "array",
          name: "fase procesal",
          // values: [
          //      "Acta B",
          //      "Acta conciliación B",
          //      "Acuerdo B",
          //      "Acuse de recibo B",
          //      "Auto B",
          // ],
     },
     {
          tipo: "array",
          name: "tipo procedimiento",
          // values: [
          //      "Tramite AB",
          //      "Tramite conciliación B",
          //      "Tramite B",
          //      "Tramite de recibo B",
          //      "Tramite C",
          // ],
     },
     {
          tipo: "array",
          name: "magistrado",
          // values: [
          //      "Tramite AB",
          //      "Tramite conciliación B",
          //      "Tramite B",
          //      "Tramite de recibo B",
          //      "Tramite C",
          // ],
     },

];
let form3: FormGroup = new FormGroup({
     [`arrayData0`]: new FormArray([]),

     [`arrayData1`]: new FormArray([]),

     [`arrayData2`]: new FormArray([]),

     [`arrayData3`]: new FormArray([]),
     // procesal: new FormGroup({
     //      procesal: new FormControl(""),
     // }),
     // [`arrayData1`]: new FormArray([]),
     // magistrado: new FormGroup({
     //      from: new FormControl(""),
     //      until: new FormControl(""),
     //      another: new FormControl(""),
     // }),
     // resolucion: new FormGroup({
     //      ["Acta vale"]: new FormControl(""),
     //      ["Acta conciliación"]: new FormControl(""),
     //      ["Acuerdo"]: new FormControl(""),
     // }),
     // [`arrayData4`]: new FormArray([]),
});
enum filtroDocumentos {
     tipos_documentales,
     fases_procesales,
     tipos_procedimientos,
     magistrados,
}
enum filtroResoluciones {
     tipos_documentales,
     fases_procesales,
     tipos_procedimientos,
     magistrados,
}
enum filtroEscritos {
     tipos_documentales,
     fases_procesales,
     tipos_procedimientos,
     magistrados,
}
// enum config {
//      procedimiento,
//      procedimiento2,
//      tramite,
// }

let creaConfig = (reqVal, reqValNumb, configVar, configNumb) => {
     let datosReq = [];
     reqVal[reqValNumb].forEach((item) => {
          datosReq.push(item);
     });
     // console.log(datosReq);
     // console.log(configVar[configNumb]);

     configVar[configNumb].values = datosReq;
     // console.log(config1);

     // console.log(configVar[configNumb])
};

export {
     config1,
     config2,
     config3,
     form1,
     form2,
     form3,
     creaConfig,
     filtroDocumentos,
     filtroResoluciones,
     filtroEscritos
     // config,
};

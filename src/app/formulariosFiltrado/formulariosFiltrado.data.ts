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
          name: "tipo resolución",
          // values: [
          //      "Acta",
          //      "Acta conciliación",
          //      "Acuerdo",
          //      "Acuse de recibo",
          //      "Auto",
          // ],
     },
     {
          tipo: "input",
          name: "tipo input",
          // values: [
          //      "Acta",
          //      "Acta conciliación",
          //      "Acuerdo",
          //      "Acuse de recibo",
          //      "Auto",
          // ],
     },
     {
          tipo: "date",
          name: "fecha resolución",
          values: [
               "resolución",
               "sentencia",
               //      "Acta conciliación B",
               //      "Acuerdo B",
               //      "Acuse de recibo B",
               //      "Auto B",
          ],
     },
     {
          tipo: "checkbox",
          name: "selección multi",
          multi: true,
          values: [
               // "resolución",
               // "sentencia"
               //      "Acta conciliación B",
               //      "Acuerdo B",
               //      "Acuse de recibo B",
               //      "Auto B",
          ],
     },
     {
          tipo: "checkbox",
          name: "selección no multi",
          multi: false,
          multiValue: "Opción",
          values: [
               // "resolución",
               // "sentencia"
               //      "Acta conciliación B",
               //      "Acuerdo B",
               //      "Acuse de recibo B",
               //      "Auto B",
          ],
     },
     // {
     //      tipo:"checkbox",
     //      name:"cualquiera",
     //      multi:true
     // }
     // {
     //      tipo: "array",
     //      name: "tipo procedimiento",
     //      // values: [
     //      //      "Tramite AB",
     //      //      "Tramite conciliación B",
     //      //      "Tramite B",
     //      //      "Tramite de recibo B",
     //      //      "Tramite C",
     //      // ],
     // },
     // {
     //      tipo: "array",
     //      name: "magistrado",
     //      // values: [
     //      //      "Tramite AB",
     //      //      "Tramite conciliación B",
     //      //      "Tramite B",
     //      //      "Tramite de recibo B",
     //      //      "Tramite C",
     //      // ],
     // },
];

let form2: FormGroup = new FormGroup({
     [`arrayData0`]: new FormArray([]),

     ["tipo input"]: new FormGroup({
          ["Input 1"]: new FormControl(""),
          ["Input 2 /"]: new FormControl(""),
          ["Input 3"]: new FormControl(""),
     }),
     ["fecha resolución"]: new FormGroup({
          ["Auto"]: new FormControl(""),
          ["Sentencia"]: new FormControl(""),
     }),
     ["selección multi"]: new FormGroup({
          ["Tipo 1"]: new FormControl(""),
          ["Tipo 2"]: new FormControl(""),
     }),
     ["selección no multi"]: new FormGroup({
          ["Opción"]: new FormControl(""),
          // ["selección_1"]: new FormControl(""),
     }),
     // cualquiera: new FormGroup({
     //      resolución: new FormControl(""),
     // }),

     // [`arrayData2`]: new FormArray([]),

     // [`arrayData3`]: new FormArray([]),
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
          name: "tipo escrito",
          // values: [
          //      "Acta",
          //      "Acta conciliación",
          //      "Acuerdo",
          //      "Acuse de recibo",
          //      "Auto",
          // ],
     },
     {
          tipo: "date",
          name: "fecha presentación",
          values: [
               "presentación",
               // "Acta conciliación B",
               // "Acuerdo B",
               // "Acuse de recibo B",
               // "Auto B",
          ],
     },
     // {
     //      tipo: "array",
     //      name: "tipo procedimiento",
     //      // values: [
     //      //      "Tramite AB",
     //      //      "Tramite conciliación B",
     //      //      "Tramite B",
     //      //      "Tramite de recibo B",
     //      //      "Tramite C",
     //      // ],
     // },
     // {
     //      tipo: "array",
     //      name: "magistrado",
     //      // values: [
     //      //      "Tramite AB",
     //      //      "Tramite conciliación B",
     //      //      "Tramite B",
     //      //      "Tramite de recibo B",
     //      //      "Tramite C",
     //      // ],
     // },
];

let form3: FormGroup = new FormGroup({
     [`arrayData0`]: new FormArray([]),

     ["fecha presentación"]: new FormGroup({
          presentación: new FormControl(""),
     }),

     // [`arrayData2`]: new FormArray([]),

     // [`arrayData3`]: new FormArray([]),
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

// let creaConfig = (reqVal, reqValNumb, configVar, configNumb) => {
//      let datosReq = [];
//      reqVal[reqValNumb].forEach((item) => {
//           datosReq.push(item);
//      });
//      // console.log(datosReq);
//      // console.log(configVar[configNumb]);

//      configVar[configNumb].values = datosReq;
//      // console.log(config1);

//      // console.log(configVar[configNumb])
// };

export {
     config1,
     config2,
     config3,
     form1,
     form2,
     form3,
     // creaConfig,
     // filtroDocumentos,
     // filtroResoluciones,
     // filtroEscritos
     // config,
};

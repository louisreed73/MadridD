import { FormArray, FormControl, FormGroup } from "@angular/forms";

let config1 = [
     {
          tipo: "array",
          name: "procedimiento",
          values: [
               "Acta",
               "Acta conciliación",
               "Acuerdo",
               "Acuse de recibo",
               "Auto",
          ],
     },
     {
          tipo: "array",
          name: "procedimiento 2",
          values: [
               "Acta B",
               "Acta conciliación B",
               "Acuerdo B",
               "Acuse de recibo B",
               "Auto B",
          ],
     },
     {
          tipo: "array",
          name: "tramite",
          values: [
               "Tramite AB",
               "Tramite conciliación B",
               "Tramite B",
               "Tramite de recibo B",
               "Tramite C",
          ],
     },
     {
          tipo: "date",
          name: "magistrado",
     },
];

let form1: FormGroup = new FormGroup({
     [`arrayData0`]: new FormArray([]),

     [`arrayData1`]: new FormArray([]),

     [`arrayData2`]: new FormArray([]),

     magistrado: new FormGroup({
          magistrado0: new FormControl(""),
          magistrado1: new FormControl(""),
          magistrado2: new FormControl(""),
     }),
});

/**
 *
 * Block comment
 *
 */

let config2 = [
     {
          tipo: "checkbox",
          name: "procesal",
          multi: false,
          values: ["tipo 1", "tipo 2", "tipo 3"],
     },
     {
          tipo: "array",
          name: "procedimiento",
          values: [
               "Acta",
               "Acta conciliación",
               "Acuerdo",
               "Acuse de recibo",
               "Auto",
          ],
     },
     {
          tipo: "date",
          name: "magistrado",
     },
     {
          tipo: "checkbox",
          name: "resolucion",
          multi: true,
     },
     {
          tipo: "array",
          name: "procedimiento 2",
          values: [
               "Acta B",
               "Acta conciliación B",
               "Acuerdo B",
               "Acuse de recibo B",
               "Auto B",
          ],
     },
];
let form2: FormGroup = new FormGroup({
     procesal: new FormGroup({
          procesal: new FormControl(""),
     }),
     [`arrayData1`]: new FormArray([]),
     magistrado: new FormGroup({
          magistrado0: new FormControl(""),
          magistrado1: new FormControl(""),
          magistrado2: new FormControl(""),
     }),
     resolucion: new FormGroup({
          resolucion0: new FormControl(""),
          resolucion1: new FormControl(""),
          resolucion2: new FormControl(""),
     }),
     [`arrayData4`]: new FormArray([]),
});

let config3 = [
     {
          tipo: "checkbox",
          name: "procesal",
          multi: false,
          values: ["tipo 1", "tipo 2", "tipo 3"],
     },
     {
          tipo: "array",
          name: "procedimiento",
          values: [
               "Acta",
               "Acta conciliación",
               "Acuerdo",
               "Acuse de recibo",
               "Auto",
          ],
     },
     {
          tipo: "date",
          name: "magistrado",
     },
     {
          tipo: "checkbox",
          name: "resolucion",
          multi: true,
     },
     {
          tipo: "array",
          name: "procedimiento 2",
          values: [
               "Acta B",
               "Acta conciliación B",
               "Acuerdo B",
               "Acuse de recibo B",
               "Auto B",
          ],
     },
];
let form3: FormGroup = new FormGroup({
     procesal: new FormGroup({
          procesal: new FormControl(""),
     }),
     [`arrayData1`]: new FormArray([]),
     magistrado: new FormGroup({
          magistrado0: new FormControl(""),
          magistrado1: new FormControl(""),
          magistrado2: new FormControl(""),
     }),
     resolucion: new FormGroup({
          resolucion0: new FormControl(""),
          resolucion1: new FormControl(""),
          resolucion2: new FormControl(""),
     }),
     [`arrayData4`]: new FormArray([]),
});

enum filtro {
     documentos,
     documentos2,
}
enum config {
     procedimiento,
     procedimiento2,
     tramite,
}

let creaConfig=(reqVal, reqValNumb, configVar, configNumb)=> {
    let datosReq = [];
    reqVal[reqValNumb].forEach((item) => {
         datosReq.push(item);
    });
    console.log(datosReq);
    console.log(configVar[configNumb]);

    configVar[configNumb].values = datosReq;
    console.log(config1);

    // console.log(configVar[configNumb])
}

export { 
    config1, 
    config2, 
    config3, 
    form1, 
    form2, 
    form3, 
    creaConfig,
    filtro, 
    config 
};

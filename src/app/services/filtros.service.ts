import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltrosService {
  // nombrado = {
  //   0: {
  //     tipo: 'array',
  //     name: 'procedimiento',
  //     values: [
  //       'Acta', 
  //       'Acta conciliación', 
  //       'Acuerdo',
  //       'Acuse de recibo',
  //       'Auto',        
  //     ],
  //   },
  //   1: {
  //     tipo: 'checkbox',
  //     name: 'procesal',
  //     multi: false,
  //     values: ['tipo 1', 'tipo 2', 'tipo 3'],
  //   },
  //   2: {
  //     tipo: 'array',
  //     name: 'procedimiento 2',
  //     values:[

  //         'Acta B', 
  //         'Acta conciliación B', 
  //         'Acuerdo B',
  //         'Acuse de recibo B',
  //         'Auto B',        

  //     ]
  //   },
  //   3: {
  //     tipo: 'date',
  //     name: 'magistrado',
  //   },
  //   4: {
  //     tipo: 'checkbox',
  //     name: 'resolucion',
  //     multi: true,
  //   },
  //   5: {
  //     tipo: 'checkbox',
  //     name: 'procedimental',
  //     multi: false,
  //     values: ['proc 1', 'proc 2', 'proc 3'],
  //   },
  // };
  nombrado = {
    0: {
      tipo: 'array',
      name: 'procedimiento',
      values: [
        'Acta', 
        'Acta conciliación', 
        'Acuerdo',
        'Acuse de recibo',
        'Auto',        
      ],
    },
    1: {
      tipo: 'array',
      name: 'procedimiento 2',
      values:[

          'Acta B', 
          'Acta conciliación B', 
          'Acuerdo B',
          'Acuse de recibo B',
          'Auto B',        

      ]
    },
    2: {
      tipo: 'array',
      name: 'tramite',
      values:[

          'Tramite AB', 
          'Tramite conciliación B', 
          'Tramite B',
          'Tramite de recibo B',
          'Tramite C',        

      ]
    },
    3: {
      tipo: 'date',
      name: 'magistrado',
    },

  };

  // formA: FormGroup = new FormGroup({
  //   [`arrayData0`]: new FormArray([]),

  //   procesal: new FormGroup({
  //     procesal: new FormControl(''),
  //   }),

  //   [`arrayData2`]: new FormArray([]),

  //   magistrado: new FormGroup({
  //     magistrado0: new FormControl(''),
  //     magistrado1: new FormControl(''),
  //     magistrado2: new FormControl(''),
  //   }),

  //   resolucion: new FormGroup({
  //     resolucion0: new FormControl(''),
  //     resolucion1: new FormControl(''),
  //     resolucion2: new FormControl(''),
  //   }),

  //   procedimental: new FormGroup({
  //     procedimental: new FormControl(''),
  //   }),
  // });

    formA: FormGroup = new FormGroup({
    [`arrayData0`]: new FormArray([]),

    [`arrayData1`]: new FormArray([]),

    [`arrayData2`]: new FormArray([]),

    magistrado: new FormGroup({
      magistrado0: new FormControl(''),
      magistrado1: new FormControl(''),
      magistrado2: new FormControl(''),
    }),
  });

  /**
   *
   * Block comment
   *
   */

  nombrado1 = {
    0: {
      tipo: 'checkbox',
      name: 'procesal',
      multi: false,
      values: ['tipo 1', 'tipo 2', 'tipo 3'],
    },
    1: {
      tipo: 'array',
      name: 'procedimiento',
      values: [
        'Acta', 
        'Acta conciliación', 
        'Acuerdo',
        'Acuse de recibo',
        'Auto',        
      ],
    },
    2: {
      tipo: 'date',
      name: 'magistrado',
    },
    3: {
      tipo: 'checkbox',
      name: 'resolucion',
      multi: true,
    },
    4: {
      tipo: 'array',
      name: 'procedimiento 2',
      values:[

          'Acta B', 
          'Acta conciliación B', 
          'Acuerdo B',
          'Acuse de recibo B',
          'Auto B',        

      ]
    },
  };
  formA1: FormGroup = new FormGroup({
    procesal: new FormGroup({
      procesal: new FormControl(''),
    }),
    [`arrayData1`]: new FormArray([]),
    magistrado: new FormGroup({
      magistrado0: new FormControl(''),
      magistrado1: new FormControl(''),
      magistrado2: new FormControl(''),
    }),
    resolucion: new FormGroup({
      resolucion0: new FormControl(''),
      resolucion1: new FormControl(''),
      resolucion2: new FormControl(''),
    }),
    [`arrayData4`]: new FormArray([]),
  });

  /**
   *
   * Block comment
   *
   */

  config$ = of(this.nombrado);
  formGrupo$ = of(this.formA);
  config1$ = of(this.nombrado1);
  formGrupo1$ = of(this.formA1);

  constructor() {}
}


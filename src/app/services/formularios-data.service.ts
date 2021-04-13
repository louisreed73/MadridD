import { Injectable } from "@angular/core";

@Injectable({
     providedIn: "root",
})
export class FormulariosService {
     private formulario1 = [
          {
               id: 0,
               formGroup_Title: "Descripcion",
               multi: true,
               type: "checkB-radio",
               formGroup_controls: [
                    {
                         for_label: "description_label",
                         formControl_Name: "palabra 1_fc_name",
                         value: "palabra 1",
                    },
                    {
                         for_label: "description_label",
                         formControl_Name: "palabra 2_fc_name",
                         value: "palabra 2",
                    },
                    {
                         for_label: "description_label",
                         formControl_Name: "palabra 3_fc_name",
                         value: "palabra 3",
                    },
                    {
                         for_label: "description_label",
                         formControl_Name: "palabra 4_fc_name",
                         value: "palabra 4",
                    },
               ],
          },
          {
               id: 1,
               formGroup_Title: "Documental",
               multi: false,
               type: "checkB-radio",
               formGroup_controls: [
                    {
                         for_label: "documental_label",
                         formControl_Name: "documental_fc_name",
                         value: "tipo 1",
                    },
                    {
                         for_label: "documental_label",
                         formControl_Name: "documental_fc_name",
                         value: "tipo 2",
                    },
                    {
                         for_label: "documental_label",
                         formControl_Name: "documental_fc_name",
                         value: "tipo 3",
                    },
                    {
                         for_label: "documental_label",
                         formControl_Name: "documental_fc_name",
                         value: "tipo 4",
                    },
               ],
          },
          {
               id: 2,
               formGroup_Title: "Procesal",
               multi: true,
               type: "checkB-radio",
               formGroup_controls: [
                    {
                         for_label: "procesal_label",
                         formControl_Name: "procesal 1_fc_name",
                         value: "procesal 1",
                    },
                    {
                         for_label: "procesal_label",
                         formControl_Name: "procesal 2_fc_name",
                         value: "procesal 2",
                    },
                    {
                         for_label: "procesal_label",
                         formControl_Name: "procesal 3_fc_name",
                         value: "procesal 3",
                    },
               ],
          },
          {
               id: 3,
               formGroup_Title: "Fecha",
               type: "date",
               formGroup_controls: [
                    {
                         for_label: "fecha_label",
                         formControl_Name: "fecha_fc_desde",
                         value: "Desde",
                    },
                    {
                         for_label: "fecha_label",
                         formControl_Name: "fecha_fc_hasta",
                         value: "hasta",
                    },
                    {
                         for_label: "fecha_label",
                         formControl_Name: "fecha_fc_from",
                         value: "from",
                    },
                    {
                         for_label: "fecha_label",
                         formControl_Name: "fecha_fc_until",
                         value: "until",
                    },
               ],
          },
     ];
     private formulario2 = [
          {
               id: 0,
               formGroup_Title: "Documental",
               multi: false,
               type: "checkB-radio",
               formGroup_controls: [
                    {
                         for_label: "documental_label",
                         formControl_Name: "documental_fc_name",
                         value: "tipo 1",
                    },
                    {
                         for_label: "documental_label",
                         formControl_Name: "documental_fc_name",
                         value: "tipo 2",
                    },
                    {
                         for_label: "documental_label",
                         formControl_Name: "documental_fc_name",
                         value: "tipo 3",
                    },
                    {
                         for_label: "documental_label",
                         formControl_Name: "documental_fc_name",
                         value: "tipo 4",
                    },
               ],
          },
          {
               id: 1,
               formGroup_Title: "Fecha",
               type: "date",
               formGroup_controls: [
                    {
                         for_label: "fecha_label",
                         formControl_Name: "fecha_fc_desde",
                         value: "Desde",
                    },
                    {
                         for_label: "fecha_label",
                         formControl_Name: "fecha_fc_hasta",
                         value: "hasta",
                    },
                    {
                         for_label: "fecha_label",
                         formControl_Name: "fecha_fc_from",
                         value: "from",
                    },
                    {
                         for_label: "fecha_label",
                         formControl_Name: "fecha_fc_until",
                         value: "until",
                    },
               ],
          },
          {
               id: 2,
               formGroup_Title: "Procesal",
               multi: true,
               type: "checkB-radio",
               formGroup_controls: [
                    {
                         for_label: "procesal_label",
                         formControl_Name: "procesal 1_fc_name",
                         value: "procesal 1",
                    },
                    {
                         for_label: "procesal_label",
                         formControl_Name: "procesal 2_fc_name",
                         value: "procesal 2",
                    },
                    {
                         for_label: "procesal_label",
                         formControl_Name: "procesal 3_fc_name",
                         value: "procesal 3",
                    },
               ],
          },

          {
               id: 3,
               formGroup_Title: "Descripcion",
               // formGroup_Name: 'filter_description_name',
               multi: true,
               type: "checkB-radio",
               formGroup_controls: [
                    {
                         for_label: "description_label",
                         formControl_Name: "palabra 1_fc_name",
                         value: "palabra 1",
                    },
                    {
                         for_label: "description_label",
                         formControl_Name: "palabra 2_fc_name",
                         value: "palabra 2",
                    },
                    {
                         for_label: "description_label",
                         formControl_Name: "palabra 3_fc_name",
                         value: "palabra 3",
                    },
                    {
                         for_label: "description_label",
                         formControl_Name: "palabra 4_fc_name",
                         value: "palabra 4",
                    },
               ],
          },
     ];

     constructor() {}

     getFormulario(num: number): Array<{ [k: string]: any }> {
          return this[`formulario${num}`];
     }
}

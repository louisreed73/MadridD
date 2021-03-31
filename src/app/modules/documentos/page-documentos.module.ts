import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchDocumentsComponent } from 'src/app/pages/documentos/search-documents/search-documents.component';
import { SearchResolucionesComponent } from 'src/app/pages/documentos/search-resoluciones/search-resoluciones.component';
import { SearchEscritosComponent } from 'src/app/pages/documentos/search-escritos/search-escritos.component';
import { DocumentCardComponent } from '../../components/document-card/document-card.component';


const routes:Routes=[
    { path: 'documentos', component: SearchDocumentsComponent },
    { path: 'resoluciones', component: SearchResolucionesComponent },
    { path: 'escritos', component: SearchEscritosComponent },
]


@NgModule({
    declarations: [
        SearchDocumentsComponent,
        SearchResolucionesComponent,
        SearchEscritosComponent,
        DocumentCardComponent,
    ],
    imports: [ 
        CommonModule,      
        RouterModule.forChild(routes)
     ],
    exports: [],
    providers: [],
})
export class PagesDocumentsModule {}
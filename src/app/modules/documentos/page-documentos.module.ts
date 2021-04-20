import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SearchDocumentsComponent } from "src/app/pages/documentos/search-documents/search-documents.component";
import { SearchResolucionesComponent } from "src/app/pages/documentos/search-resoluciones/search-resoluciones.component";
import { SearchEscritosComponent } from "src/app/pages/documentos/search-escritos/search-escritos.component";
import { DocumentCardComponent } from "../../components/document-card/document-card.component";
import { SharedUtilitiesModule } from "src/app/sharedModules/shared-utilities/shared-utilities.module";
import { AutocompleteComponent } from "src/app/sharedComponents/autocomplete/autocomplete.component";

const routes: Routes = [
     { path: "documentos", component: SearchDocumentsComponent },
     { path: "resoluciones", component: SearchResolucionesComponent },
     { path: "escritos", component: SearchEscritosComponent },
];

@NgModule({
     declarations: [
          SearchDocumentsComponent,
          SearchResolucionesComponent,
          SearchEscritosComponent,
          DocumentCardComponent,
          // AutocompleteComponent
     ],
     imports: [
          CommonModule, 
          SharedUtilitiesModule,
          RouterModule.forChild(routes)],
     exports: [],
     providers: [],
})
export class PagesDocumentsModule {}

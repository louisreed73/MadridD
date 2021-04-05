import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SearchLayoutComponent } from './layouts/search-layout/search-layout.component';
import { DocumentoComponent } from './pages/documento/documento.component';
import { FilterTabsComponent } from './components/filter-tabs/filter-tabs.component';
import { DetailLayoutComponent } from './layouts/detail-layout/detail-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedUtilitiesModule } from './sharedModules/shared-utilities/shared-utilities.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'documentos' },
  {
    path: '', 
    component: SearchLayoutComponent,
    loadChildren: () => import('./modules/documentos/page-documentos.module').then(m => m.PagesDocumentsModule)
  },
  
  { path: '', component: DetailLayoutComponent,children:[
    { path: 'documento/:id', component: DocumentoComponent },
  ] },
  { path: '**', redirectTo: "documentos" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {preloadingStrategy:PreloadAllModules}),
      CommonModule,
      FormsModule,
      ReactiveFormsModule,  
      InfiniteScrollModule,
      SharedUtilitiesModule,


  ],
  exports: [RouterModule],
  declarations: [
    SearchLayoutComponent,
    DetailLayoutComponent,
    DocumentoComponent,
    FilterTabsComponent,
    SearchFormComponent,
  ]
})
export class AppRoutingModule { }

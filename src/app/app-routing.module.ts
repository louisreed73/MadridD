import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SearchLayoutComponent } from './layouts/search-layout/search-layout.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FilterTabsComponent } from './components/filter-tabs/filter-tabs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'documentos' },
  {
    path: '', 
    component: SearchLayoutComponent,
    loadChildren: () => import('./modules/documentos/page-documentos.module').then(m => m.PagesDocumentsModule)
  },

  { path: 'detail', component: DetailComponent },
  { path: '**', redirectTo: "documentos" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {preloadingStrategy:PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: [
    SearchLayoutComponent,
    DetailComponent,
    FilterTabsComponent,
  ]
})
export class AppRoutingModule { }

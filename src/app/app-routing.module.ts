import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLayoutComponent } from './layouts/search-layout/search-layout.component';
import { SearchComponent } from './pages/search/search.component';
import { DocumentsComponent } from './pages/documents/documents.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: '', component: SearchLayoutComponent, children:
      [
        { path: 'search', component: SearchComponent },
      ]
 },
  { path: 'documents', component: DocumentsComponent },
  { path: '**', redirectTo: "search" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    SearchLayoutComponent,
    SearchComponent,
    DocumentsComponent
  ]
})
export class AppRoutingModule { }
